"use client";

import { useEffect, useState } from "react";
import { BrowserProvider } from "ethers";
import { EtherMailProvider } from "@ethermail/ethermail-wallet-provider";

const EtherMailSso = () => {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);

  useEffect(() => {
    // Load EtherMail SDK
    const script = document.createElement("script");
    script.src = "https://cdn-email.ethermail.io/sdk/v2/ethermail.js";
    script.defer = true;
    script.setAttribute("a", "67353ab1f14dc512c8f225ef");
    script.setAttribute("b", "si3");
    script.setAttribute("c", "login");

    document.body.appendChild(script);

    // Handle login event
    const handleLogin = async (event: any) => {
      console.log("JWT Token:", event.detail.token);

      // Connect to EtherMail Wallet Provider
      const ethermailProvider = new EtherMailProvider();
      const browserProvider = new BrowserProvider(ethermailProvider);
      setProvider(browserProvider);
    };

    window.addEventListener("EtherMailSignInOnSuccess", handleLogin);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("EtherMailSignInOnSuccess", handleLogin);
    };
  }, []);

  useEffect(() => {
    const applyStyles = () => {
      const interval = setInterval(() => {
        const element = document.querySelector("ethermail-login") as HTMLElement & { shadowRoot?: ShadowRoot };
        if (element && element.shadowRoot) {
          const style = document.createElement("style");
          style.textContent = `
            .ethermail-login-button {
              display: flex;
              align-items: center;
              gap: 10px;
              background:rgb(172, 173, 175);
              border: none;
              padding: 8px 16px;
              border-radius: 8px;
              font-size: 14px;
              font-weight: 500;
              transition: background 0.2s ease-in-out;
              color: black;
            }
            button:hover {
              background: #e5e7eb;
            }
            img {
              width: 20px;
              height: 20px;
            }
          `;
          element.shadowRoot.appendChild(style);
          clearInterval(interval); // Stop checking once styles are applied
        }
      }, 500);
    };

    (window as any).setStyle = applyStyles;
    applyStyles();
  }, []);

  return (
    <div>
      <ethermail-login type="wallet" permissions="write"></ethermail-login>
      {provider && <p>✅ Wallet Connected</p>}
    </div>
  );
};

export default EtherMailSso;
