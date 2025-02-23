import React from "react";
import useMetaMask from "@/components/hooks/useMetaMask";
import ethermailimg from "@/public/ethermail.png";
import walletconnectimg from "@/public/walletconnect.png";
import metamaskimg from "@/public/metamask.png";
import Image from "next/image";

const MetaMaskButton: React.FC = () => {
  const { account, connectWallet } = useMetaMask();

  return (
    <button
      onClick={connectWallet}
      className="w-full flex items-center gap-3 text-sm md:text-md p-2 md:p-3 border rounded-lg bg-gray-100 hover:bg-gray-200"
    >
     <Image src={metamaskimg} alt="Metamask" width={20} height={20} />
      {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "MetaMask"}
    </button>
  );
};

export default MetaMaskButton;
