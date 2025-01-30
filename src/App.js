import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { Copy, Check } from 'lucide-react';
import './styles.css';

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button 
      className="copy-button" 
      onClick={handleCopy}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? <Check size={16} color="#4CAF50" /> : <Copy size={16} />}
    </button>
  );
};

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = useCallback(async () => {
    if (inputValue.trim() === '') return;

    const userMessage = { 
      role: 'user', 
      content: inputValue, 
      timestamp: moment().format('HH:mm:ss') 
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await axios.post(
        'https://api.x.ai/v1/chat/completions',
        {
          messages: [
            { role: 'system', content: 'You are a technical assistant. Respond using markdown formatting for code, lists, and structured content. Use code blocks with language specifiers when sharing code.' },
            { role: 'user', content: inputValue },
          ],
          model: 'grok-beta',
          stream: false,
          temperature: 0,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'YOUR_API_KEY', // Replace with your API key
          },
        }
      );

      const assistantMessage = { 
        role: 'assistant', 
        content: res.data.choices[0].message.content, 
        timestamp: moment().format('HH:mm:ss') 
      };

      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('Error fetching data:', error);
      const errorMessage = { 
        role: 'assistant', 
        content: `Error: Unable to fetch response. ${error.message}`, 
        timestamp: moment().format('HH:mm:ss') 
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // Custom markdown renderer with syntax highlighting and copy functionality
  const MarkdownComponents = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      const codeText = String(children).replace(/\n$/, '');
      
      return !inline && match ? (
        <div className="code-block-container">
          <CopyButton text={codeText} />
          <SyntaxHighlighter
            style={oneDark}
            language={match[1]}
            PreTag="div"
            {...props}
          >
            {codeText}
          </SyntaxHighlighter>
        </div>
      ) : (
        <div className="inline-code-container">
          <CopyButton text={codeText} />
          <code className={className} {...props}>
            {children}
          </code>
        </div>
      );
    },
  };

  return (
    <div className="terminal-container">
      <div className="terminal-body" ref={chatContainerRef}>
        {
          messages.map((msg, index) => (
            <div key={index} className={`terminal-message ${msg.role}`}>
              <div className="prompt">{msg.role === 'user' ? 'User' : 'Assistant'}:</div>
              <div className="message-content">
                <ReactMarkdown components={MarkdownComponents} remarkPlugins={[remarkGfm]}>
                  {msg.content}
                </ReactMarkdown>
              </div>
              <span className="timestamp">[{msg.timestamp}]</span>
            </div>
          ))
        }
        {isLoading && (
          <div className="terminal-message loading">
            <span className="prompt">system@localhost:~# </span>
            <span className="message-content">Processing request...</span>
          </div>
        )}
      </div>
      <div className="terminal-input">
        <span className="prompt">Enter your query > </span>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          disabled={isLoading}
          className="input-field"
        />
      </div>
    </div>
  );
};

export default App;