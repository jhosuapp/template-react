# React 18 Project

This is a project built with **React 18**.

## 🚀 Requirements

- Node.js >= 18.x  
- npm >= 8.x

> It's recommended to use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions. If you're using `nvm`, you can run `nvm use` (if a `.nvmrc` file is present).

## 📦 Setup and Usage

Clone the repository and run the following commands:

1. **Install Dependencies (Node version greater than 1.18.0 required):**: 
   ```bash
   npm install 

2. **Run Project:**: 
   ```bash
   npm run dev

## Deploy

1. **Build Project:**: 
   ```bash
   npm run build

2. **Build Project:**: 
   ```bash
   npm run deploy

## ⚙️ Environment Variables

This project uses environment variables. You can refer to the `.env.example` file located in the root directory to see the required variables.

To set up your environment, create a `.env` file based on the example and fill in the appropriate values.

## 📁 Project Structure

This project follows a **feature-based architecture**. Each feature/module has its own folder containing related components, hooks, services, and styles, which helps improve scalability and maintainability.

/
├── src/
│ ├── features/ # Feature-based modules (e.g., auth, dashboard, user)
│ ├── components/ # Reusable UI components
│ ├── hooks/ # Custom React hooks
│ ├── services/ # API calls and external services
│ ├── utils/ # Utility functions and helpers
│ ├── assets/ # Static assets (images, icons, etc.)
│ └── main files # Entry point, routing, and global providers
├── public/ # Public assets
├── .env.example # Example environment variables
├── package.json # Dependencies and scripts
└── README.md # Project documentation