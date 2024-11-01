"use client";
import { createThirdwebClient } from "thirdweb";
import { scrollSepoliaTestnet, sepolia } from "thirdweb/chains";
import { ThirdwebProvider, ConnectButton, useActiveAccount } from "thirdweb/react";



const client = createThirdwebClient({
  clientId: "509114a5f65331d548cc997ba5bcb561"
})


export default function Home() {



  return (
    <ThirdwebProvider>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Main />
      </div>

    </ThirdwebProvider>
  );
}


const Main = () => {

  const activeAccount = useActiveAccount();


  return (
    <main className="flex justify-center items-center">
        
          {
            activeAccount ? 
            <p>
              Address : {activeAccount.address}
            </p> : <></>
          }        
          <ConnectButton
            client={client}
            // account abstraction options
            accountAbstraction={{ chain: sepolia, sponsorGas: true }}
          />
    </main>
  )
}

