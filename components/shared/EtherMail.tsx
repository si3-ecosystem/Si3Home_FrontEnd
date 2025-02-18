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
        })
    }, []);

    return (
        <div className="flex items-center  w-full max-w-md overflow-hidden">
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
