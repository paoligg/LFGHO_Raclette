# LFGHO Raclette

## Overview

LFGHO Raclette is a Web3 project developed for the LFGHO Hackathon. This project leverages blockchain technology to innovate in the use of Vault to create new features for the GHO Token. Our platform consists of two main components: the front-end application (found in this repository) and the smart contracts that handle the blockchain interactions (found in our [Smart Contracts Repository](https://github.com/AntoineSirot/LFGHO_Raclette_SmartContracts)).

## Team 

We are the LFGHO Raclette team, composed of 5 friends working together on this project. As students, we learned a lot during these last 10 days, realizing our potential when motivated and cooperative.

## How does it work? 

We are passionate about creating a new use for the GHO token. We developed a gaming platform with a variety of games, allowing people worldwide to play, bet, and win prizes. The platform is designed for user independence and a unique gaming experience.

## Features
### Key Features

- **Connect Wallet:** Connect your wallet using the [ConnectKit button](https://docs.family.co/connectkit) to access all DApp features.
- **Mint GHO:** Easily receive GHO from the Aave pool facilitator directly through our app.
- **Stacking GHO:** Deposit GHO Tokens to receive R-GHO with a 1:1 ratio, enabling quick and efficient transactions.
- **Display Games:** Select your favorite game category and view all available, ongoing, or upcoming games.
- **Create Game:** Set up a new game by choosing the number of players and the prize distribution.
- **Join Games:** Participate in existing games, paying an R-GHO entry fee proportionate to the total prize.
- **Receive Rewards:** After a game, distribute rewards based on the game's outcome. [Note: This feature is in development for decentralized verification of results.]

### Secondary Features

- **Project Explanation:** Descriptions throughout the project to help users at each step.
- **TeamInfo:** Visuals of our team with LinkedIn profiles for networking and queries.
- **Nav Bar:** A navigation bar with our logo, name, GHO and R-GHO balance, and the ConnectKit button.
- **Footer:** A standard footer with the date and GitHub repository link.

## Technology Stack

### General Architecture

![LFRaclette_Architecture](https://github.com/paoligg/LFGHO_Raclette/assets/101109062/6e8c6ee9-c247-4b1c-a2d3-f4cf181e7364)

### Frontend Technologies

- **ConnectKit:** A toolset for easily integrating wallet connection functionality in Web3 applications, enhancing user experience with blockchain interaction.
- **React.js:** A JavaScript library for building user interfaces, known for its efficient and flexible way of rendering dynamic content.
- **Vite.js:** A modern frontend build tool that significantly improves the development experience, offering fast server start and hot module replacement.
- **TypeScript:** An open-source language that builds on JavaScript by adding static type definitions, helping with catching errors and providing a more robust coding environment.
- **CSS:** Cascading Style Sheets, a language used to style and layout web pages, such as changing fonts, colors, and spacing.
- **Tailwind:** A utility-first CSS framework for rapidly building custom designs without leaving your HTML.
- **Wagmi:** A set of React Hooks for Web3, making it easier to connect, query, and interact with Ethereum networks.
- **VanillaTilt:** A JavaScript library for creating a parallax tilt effect on elements, adding an interactive and dynamic feel to the UI.

### Smart Contracts Technologies

- **Solidity:** A programming language for writing smart contracts, primarily used on Ethereum and other blockchain platforms.
- **ERC4626:** A standard for tokenized vaults in the Ethereum ecosystem, allowing for the creation of composable and interoperable financial primitives.
- **ERC20:** A popular standard for fungible tokens on the Ethereum blockchain, defining a common list of rules that all Ethereum tokens must adhere to.

### Blockchain Technologies

- **Sepolia:** A testnet (testing network) for Ethereum, allowing developers to test new Ethereum-based projects in a safe environment without using real assets.
- **Foundry (forge & cast):** Foundry is a toolkit for Ethereum application development, with 'forge' for smart contract development and testing, and 'cast' for Ethereum network interaction.

### Deployment Technology

- **Vercel:** A cloud platform for static sites and Serverless Functions that provides a smooth workflow to deploy, preview, and ship projects, often used for frontend frameworks like React.

These technologies collectively provide a robust framework for building, testing, and deploying your Web3 application, ensuring a dynamic user interface, secure and efficient blockchain interactions, and seamless deployment and hosting.

## Getting Started
### Deployed Project

Our project is deployed on Vercel for easy access: [Deployed Project Link](https://vercel.com/link-to-your-project)

### Local Installation
To install the project locally:

1. Clone the repository:
```   
git clone https://github.com/paoligg/LFGHO_Raclette.git
```

2. Navigate to the project directory and install dependencies:
```
cd LFGHO_Raclette
npm install
```

### Running the Application
- Start the application:
```
npm run dev
```

- Access the application at `http://localhost:5173`.

## Smart Contracts
The smart contract for LFGHO Raclette is a crucial part of our system, handling the whole ERC4626 and the Games logics we created it and thought of it to be as clear as possible. The contract is written in Solidity and can be found in our [Smart Contract Repository](https://github.com/AntoineSirot/LFGHO_Raclette_SmartContracts).

## Contribution & Support
We welcome contributions from the community. If you're interested in contributing, please fork the project and open a pull request. For support, please open an issue in the repository.
