import { WagmiConfig, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

// Choose which chains you'd like to show
const chains = [sepolia];

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,
    chains,
    // Required
    appName: "connectkitdemo",
  }),
);

function App() {

  return (
    <>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <ConnectKitButton />
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  )
}

export default App
