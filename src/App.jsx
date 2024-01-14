import { WagmiConfig, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";
import { createPublicClient, http, getContract } from 'viem'
import { wagmiAbi } from '../abi/abi'



function App() {
// Choose which chains you'd like to show
const chains = [sepolia];

// wallet connection
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

// Viem public client to allow calls to smart contracts
const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(process.env.ALCHEMY_SEPOLIARPC_URL),
});

async function getTotalSupply(contract) { 
  const result = await contract.read.totalSupply()
  return result;
}


  // Create contract instance
  const contract = getContract({
    // Aave mock WETH token contract on sepolia
    address: '0xC558DBdd856501FCd9aaF1E62eae57A9F0629a3c',
    abi: wagmiAbi,
    // 1a. Insert a single client
    client: publicClient,
  })

  const totalSupply = getTotalSupply(contract);

  return (
    <>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <ConnectKitButton />
        </ConnectKitProvider>
      </WagmiConfig>
      <h1>Total Supply: ${totalSupply}</h1>
    </>
  )
}

export default App
