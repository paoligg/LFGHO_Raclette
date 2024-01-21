import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { WagmiConfig, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import './global.css';
import theme from '../theme.json';

const chains = [sepolia];

const config = createConfig(
  getDefaultConfig({
    alchemyId: import.meta.env.VITE_APP_ALCHEMY_ID, 
    walletConnectProjectId: import.meta.env.VITE_APP_WALLETCONNECT_PROJECT_ID,
    chains,
    appName: "lfraclette",
  }),
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
        <ConnectKitProvider customTheme={theme}>
          <App />
        </ConnectKitProvider>
      </WagmiConfig>
  </React.StrictMode>,
);