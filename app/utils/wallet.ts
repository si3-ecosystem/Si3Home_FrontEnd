import { Web3Wallet } from "@walletconnect/web3wallet";
import { Core } from "@walletconnect/core";
import { SessionTypes } from "@walletconnect/types";

export let web3wallet: InstanceType<typeof Web3Wallet> | null = null;
export let activeSession: SessionTypes.Struct | null = null;

// ✅ Initialize WalletConnect
export async function initWeb3Wallet() {
  if (!web3wallet) {
    const core = new Core({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "", // Ensure project ID is provided
    });

    web3wallet = await Web3Wallet.init({
      core,
      metadata: {
        name: "Si3",
        description: "YourAppDescription",
        url: "https://www.si3.space",
        icons: ["https://si3.space/favicon.png"],
      },
    });

    console.log("Web3Wallet initialized successfully!");
  }
}
export async function pairWallet(uri: string) {
  if (!web3wallet) await initWeb3Wallet();

  try {
    await web3wallet?.pair({ uri });
    console.log("Wallet pairing successful!");
  } catch (error) {
    console.error("Wallet pairing failed:", error);
  }
}
export async function approveSession(session: SessionTypes.Struct) {
  if (!web3wallet) return console.error("Web3Wallet not initialized.");

  try {
    activeSession = session;
    console.log("Session approved:", session);
  } catch (error) {
    console.error("Session approval failed:", error);
  }
}

