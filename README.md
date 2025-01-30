# xAI Fox

![xAI Fox Logo](./public/logo512.png)

Welcome to xAI Fox! This guide will help you set up and modify the project with ease.

## Live Project

You can check the live project at [xAI Fox Live](https://xai-fox.vercel.app).

## Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![xAI API](https://img.shields.io/badge/xAI%20API-FF6F00?style=for-the-badge&logo=ai&logoColor=white)

## What is Grok and xAI API

Grok is a family of Large Language Models (LLMs) developed by xAI.

Inspired by the Hitchhiker's Guide to the Galaxy and JARVIS from Iron Man, Grok is designed to answer almost any question with a touch of wit and humor, while also providing helpful and insightful responses. Grok utilizes next-token prediction model weights (models that predict the most likely word or symbol to follow a given text sequence) to know how to perform certain tasks.

Depending on the model specifications, a user can interact with a Grok model to find answers to questions, interpret images, and generate images.

xAI offers an API interface for developers to programmatically interact with Grok.

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/{your-username}/xai-fox.git
   cd xai-fox
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.production` file in the root directory and add your Vercel Analytics ID:
   ```bash
   REACT_APP_VERCEL_ANALYTICS_ID={your-vercel-analytics-id}
   ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```

## Modifying the Code

- **API Configuration:**
  Adjust the API settings in `/src/vitals.js`.

- **xAI's API:**
  Update xAI's API settings in `/src/api.js`.

## Getting xAI API

1. **Sign Up for xAI:**
   Visit the [xAI website](https://x.ai/api) and create an account.

2. **Generate an API Key:**
   After logging in, go to the API section in your account settings and generate a new API key.

3. **Add the API Key to Environment Variables:**
   Add the generated API key to your `.env.production` file:
   ```bash
   REACT_APP_XAI_API_KEY={your-xai-api-key}
   ```

For more information, visit the [xAI Docs](https://docs.x.ai/docs/overview#getting-started).

## Accessing Your xAI API Usage Data

I'm unable to access the specific usage data from the provided URL as it requires authentication. However, I can guide you on how to extract and analyze your xAI API usage data.

**Accessing Your xAI API Usage Data:**

1. **Log in to the xAI Console:**
   - Navigate to the [xAI Console](https://console.x.ai/) and sign in with your credentials.

2. **Navigate to the Usage Section:**
   - Once logged in, go to the 'Usage' section to view your API usage statistics.

3. **Specify the Date Range:**
   - Use the date filters to select the desired time frame for your usage data.

4. **Exporting Data:**
   - Currently, xAI does not provide a direct export feature for usage data. However, you can manually copy the displayed data into a CSV file for further analysis.

![Usage Data](./public/usage.png)

**Automated Data Extraction:**

For a more automated approach, you can use tools designed for exporting API usage data. For instance, the 'OpenAI API Usage Data Export' Chrome extension allows users to export their API usage data to a CSV file, facilitating further analysis in Excel. ([chromewebstore.google.com](https://chromewebstore.google.com/detail/openai-api-usage-data-exp/afpkbnmljkkbmhfpcchlilcgnikdpemj?hl=en-GB&utm_source=chatgpt.com))

**Steps to Use the Chrome Extension:**

1. **Install the Extension:**
   - Add the 'OpenAI API Usage Data Export' extension to your Chrome browser from the [Chrome Web Store](https://chrome.google.com/detail/openai-api-usage-data-exp/afpkbnmljkkbmhfpcchlilcgnikdpemj).

2. **Log in to the xAI Console:**
   - Navigate to the [xAI Console](https://console.x.ai/) and sign in.

3. **Open the Extension:**
   - Click on the extension icon in your browser.

4. **Select Date Range and Export:**
   - Choose the desired time range and export the data as a CSV file.

Please note that while this extension is primarily designed for OpenAI, it may be compatible with xAI's console due to similar interfaces. Ensure you comply with xAI's terms of service when using third-party tools.

By following these steps, you can effectively extract and analyze your xAI API usage data.

## Model Information

This project uses the `grok-beta` model for generating responses. You can configure the model settings in `/src/App.js`.

## Deployment

You can deploy this project using the following platforms:

- **Vercel:** [Vercel Deployment](https://vercel.com/)
- **Netlify:** [Netlify Deployment](https://www.netlify.com/)
- **Heroku:** [Heroku Deployment](https://www.heroku.com/)

## Additional Information

- **Performance Reporting:**
  Customize performance reporting in `/src/reportWebVitals.js`.

- **Main Application:**
  The main application code is located in `/src/index.js`.

- **Testing:**
  Set up testing in `/src/setupTests.js`.

- **Manifest:**
  Modify the web app manifest in `/public/manifest.json`.

- **Robots:**
  Configure `robots.txt` in `/public/robots.txt`.

- **License:**
  This project is licensed under the MIT License. See the LICENSE file for details.

Enjoy working with xAI Fox!