import { useState, useEffect, useRef } from 'react';
import { useContractRead } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { abi as contractAbi } from './abi'

function App() {

 const dataRef = useRef(null);

  const { data } = useContractRead({
    // Aave mock WETH token on Sepolia
    address: '0xC558DBdd856501FCd9aaF1E62eae57A9F0629a3c',
    abi: contractAbi,
    functionName: 'totalSupply',
  });

  useEffect(() => {
    dataRef.current.innerText = 'Total supply for contract is='+ data;
  }, [data]);

  return (
    <>
      <ConnectKitButton />
      <div>
        <p ref={dataRef}>{data}</p>
      </div>
    </>
  );
}

export default App