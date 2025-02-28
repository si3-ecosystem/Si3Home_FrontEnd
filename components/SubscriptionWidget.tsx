"use client";

import { useEffect } from "react";

const SubscriptionWidget = () => {
    useEffect(() => {
        (window as any).setStyle = function () {
            const element = document.querySelector("ethermail-subscribe");
            if (element && element.shadowRoot) {
                const style = document.createElement("style");
                style.textContent = `
          input, .input-web2 {
            color: #000 !important;
            font-size: 16px !important;
            padding: 12px 16px !important;
            border-radius: 25px !important;
            border: black 2px solid !important;
            background: transparent !important;
            width: 100% !important;
          }
          button.subscribe, .ethermail-md-subscribe-button, .ethermail-cw-connect-button {
            background-color: #000 !important;
            color: #fff !important;
            border-radius: 999px !important;
            border: none !important;
            padding: 12px 24px !important;
            font-weight: bold !important;
            transition: background 0.3s ease-in-out !important;
          }
          button.subscribe:hover, .ethermail-md-subscribe-button:hover, .ethermail-cw-connect-button:hover {
            background-color: #3C1FEF !important;
          }
          .md-form-group-label {
            border-color: #000 !important;
          }
          .ethermail-md-subscribe-button{
          width: 84% !important;
          }
        `;
                element.shadowRoot.appendChild(style);
            }
        };
    }, []);

    useEffect(() => {
        (function ({ ...args }) {
            if (!document.getElementById('ethermail-sdk-script')) {
                var p = document.createElement('script');
                p.id = 'ethermail-sdk-script';
                p.src = 'https://cdn-email.ethermail.io/sdk/v2/ethermail.js';
                document.body.appendChild(p);
                p.setAttribute('a', args.afid);
                p.setAttribute('b', args.communityAlias);
                // @ts-ignore
                p.setAttribute('c', args.features);
            }
        })({
            afid: '67353ab1f14dc512c8f225ef',
            communityAlias: 'si3',
            features: ['subscribe'],
        });

        const addCustomContent = () => {
            const targetDiv = document.getElementById("ethermail-md-success-modal-content");

            if (targetDiv) {
                if (!document.getElementById("custom-modal-content")) {
                    const newDiv = document.createElement("div");
                    newDiv.id = "custom-modal-content";
                    newDiv.innerHTML = `
                        <div id="subscription-footer">
                            <svg class="subscribe-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM20 6L12 11L4 6V18H20V6ZM4 6V6.01V6Z" fill="white"/>
                            </svg>
                            <p class="subscribe-text">Thanks for Subscribing.</p>
                            <span class="subscribe-emoji">🙌</span>
                        </div>`;
                    targetDiv.appendChild(newDiv);
                }
            }
        };

        if (!document.getElementById("custom-modal-styles")) {
            const styleTag = document.createElement("style");
            styleTag.id = "custom-modal-styles";
            styleTag.textContent = `
                #subscription-footer {
                    position: fixed;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #A060FC;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    border-radius: 999px;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                    font-weight: bold;
                    transition: opacity 0.5s ease-in-out;
                }
                .subscribe-icon {
                    width: 24px;
                    height: 24px;
                    fill: white;
                }
                .subscribe-emoji {
                    font-size: 18px;
                }
                .subscribe-text {
                    font-size: 14px;
                    margin: 0;
                }
            `;
            document.head.appendChild(styleTag);
        }

        addCustomContent();

        const observer = new MutationObserver(() => addCustomContent());
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex items-center w-full max-w-md overflow-hidden">
            <ethermail-subscribe
                id="ethermail-widget"
                widget="677f0f8f690e56d4d9800180"
                className="flex flex-row flex-1 items-center justify-between w-full gap-3"
                theme="light"
                on-mounted="setStyle"
                input="auto"
                wallet-connect-project-id="66d5a2d55c125fff0bf241a58c1f24f8"
                rpc='{"http": "//eth-mainnet.g.alchemy.com/v2/isvoo_tVdqb1O0KKxZb_ypfynw2rTa0A"}'
            >
            </ethermail-subscribe>
        </div>
    );
};

export default SubscriptionWidget;
