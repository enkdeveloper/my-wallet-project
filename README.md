Wallet Project


![Ekran görüntüsü 2024-07-22 140855](https://github.com/user-attachments/assets/8699ebdb-4d97-44df-a2e6-f0b6d5915609)


![Ekran görüntüsü 2024-07-22 140903](https://github.com/user-attachments/assets/59809843-4059-4d34-8d84-1676900218ac)


![Ekran görüntüsü 2024-07-22 140912](https://github.com/user-attachments/assets/f1e97a42-1147-4753-a013-0e2e62294286)


![Ekran görüntüsü 2024-07-22 140922](https://github.com/user-attachments/assets/788b3a1d-81ba-4803-86f4-26b948774d5e)


![Ekran görüntüsü 2024-07-22 140931](https://github.com/user-attachments/assets/611ea770-fa3e-4a72-bebc-b7a4004a1f5c)


Overview

The Wallet Project is a web application designed to create user-controlled wallets using the Circle API. The application guides you through the process of acquiring an App ID, creating a user, acquiring a session token, initializing a user, and completing the wallet setup by creating a PIN and recovery method.


Table of Contents

Overview

Features

Technologies

Setup and Installation

Usage

Project Structure

Contributing

License



--Features

Acquire App ID

Create User

Acquire Session Token

Initialize User Wallet

Complete Wallet Setup (Create PIN and Recovery Method)



--Technologies

React

TypeScript

Tailwind CSS

Axios

React Router DOM

FontAwesome Icons



--Setup and Installation

To set up and run the project locally, follow these steps:



Clone the repository:


Run git clone https://github.com/enkdeveloper/my-wallet-project.git

Navigate into the project directory with cd my-wallet-project



--Install dependencies:

Run npm install

Create a .env.local file in the root directory and add your API keys:


Add the following lines to .env.local:

makefile

VITE_API_KEY=your_api_key
VITE_USER_TOKEN=your_user_token


Run the development server:


Run npm run dev

Open the application in your browser:


Navigate to http://localhost:3000



--Usage

Acquire App ID:


Navigate to "Get App ID" and click the button to fetch the App ID from the Circle API.


Create User:


Navigate to "Create User" and click the button to create a new user.


Acquire Token:


Navigate to "Acquire Token" and enter the User ID, then click the button to fetch the user token and encryption key.


Initialize User:


Navigate to "Initialize User" and click the button to initialize the user wallet.


Complete Wallet Setup:



Navigate to "Complete Wallet" and follow the instructions to create a PIN and recovery method for the wallet.




Contributing


Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.




License


This project is licensed under the MIT License.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
