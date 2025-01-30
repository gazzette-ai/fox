# xAI Fox

![xAI Fox Logo](./public/logo512.png)

Welcome to xAI Fox! This guide will help you set up and modify the project with ease.

## Technologies Used

- React
- Node.js
- Vercel Analytics
- xAI API

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/bniladridas/xai-fox.git
   cd xai-fox
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.production` file in the root directory and add your Vercel Analytics ID:
   ```bash
   REACT_APP_VERCEL_ANALYTICS_ID=your-vercel-analytics-id
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
   REACT_APP_XAI_API_KEY=your-xai-api-key
   ```

For more information, visit the [xAI Docs](https://docs.x.ai/docs/overview#getting-started).

## Model Information

This project uses the `grok-beta` model for generating responses. You can configure the model settings in `/src/App.js`.

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