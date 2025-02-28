import { PushAPI, CONSTANTS } from '@pushprotocol/restapi';
import { BrowserProvider } from 'ethers';

let pushUser: PushAPI | null = null; // Maintain a single instance

export const initializePushUser = async (): Promise<PushAPI | null> => {
  try {
    if (!window.ethereum) {
      console.error('MetaMask is not installed');
      return null;
    }

    if (pushUser) return pushUser; // Return cached user instance

    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    pushUser = await PushAPI.initialize(signer, {
      env: CONSTANTS.ENV.STAGING, // Use PROD for mainnet
    });

    return pushUser;
  } catch (error) {
    console.error('Error initializing Push user:', error);
    return null;
  }
};

export const subscribeToChannel = async (channelAddress: string): Promise<void> => {
  try {
    const user = await initializePushUser();
    if (user) {
      await user.notification.subscribe(channelAddress);
      console.log(`Successfully subscribed to ${channelAddress}`);
    }
  } catch (error) {
    console.error('Error subscribing to channel:', error);
  }
};

export const listenForNotifications = async (): Promise<void> => {
  try {
    const user = await initializePushUser();
    if (user) {
      const stream = await user.initStream([CONSTANTS.STREAM.NOTIF]);

      stream.on(CONSTANTS.STREAM.NOTIF, (data) => {
        console.log('🔔 New notification received:', data);
      });

      stream.connect();
      console.log('Listening for notifications...');
    }
  } catch (error) {
    console.error('Error setting up notification stream:', error);
  }
};
