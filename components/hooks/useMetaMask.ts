"use client"; 
import { useState, useEffect } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const useMetaMask = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      setProvider(new ethers.BrowserProvider(window.ethereum));

      // Check if wallet is already connected
      window.ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
        if (accounts.length > 0) setAccount(accounts[0]);
      });

      // Listen for account changes
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        setAccount(accounts.length ? accounts[0] : null);
      });
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed! Please install it from https://metamask.io");
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } catch (error) {
      console.error("Error connecting to MetaMask", error);
    }
  };

  return { account, connectWallet };
};

export default useMetaMask;
