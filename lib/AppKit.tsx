'use client'

import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet, arbitrum } from '@reown/appkit/networks'

// 1. Get projectId at https://cloud.reown.com
const projectId = 'e02bda0cef7f63dbb1acb8624bf8aabe'

// 2. Create a metadata object
const metadata = {
  name: 'Si3',
  description: 'Creating Pathways For Diverse Voices Of the New Economy',
  url: 'https://www.si3.space/', 
  icons: ['/icons/logo.webp']
}

// 3. Create the AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: [mainnet, arbitrum],
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export default function ConnectButton() {
  return <appkit-button />
}