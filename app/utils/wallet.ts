import { Web3Wallet } from "@walletconnect/web3wallet";
import { Core } from "@walletconnect/core";

export let web3wallet: InstanceType<typeof Web3Wallet> | null = null;

export async function initWeb3Wallet() {
  if (!web3wallet) {
    const core = new Core({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "", // Ensure env variable is set
    });

    web3wallet = await Web3Wallet.init({
      core, 
      metadata: {
        name: "YourAppName",
        description: "YourAppDescription",
        url: "https://yourapp.com",
        icons: ["https://yourapp.com/icon.png"],
      },
    });
  }
}
