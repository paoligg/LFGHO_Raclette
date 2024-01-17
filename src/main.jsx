import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { WagmiConfig, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";


// Choose which chains you'd like to show
const chains = [sepolia];

// wallet connection
const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: import.meta.env.VITE_APP_ALCHEMY_ID, // or infuraId
    walletConnectProjectId: import.meta.env.VITE_APP_WALLETCONNECT_PROJECT_ID,
    chains,
    // Required
    appName: "connectkitdemo",
  }),
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
        <ConnectKitProvider theme="retro">
          <App />
        </ConnectKitProvider>
      </WagmiConfig>
  </React.StrictMode>,
);