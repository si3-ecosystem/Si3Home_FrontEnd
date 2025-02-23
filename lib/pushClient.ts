import { PushAPI, CONSTANTS } from '@pushprotocol/restapi';
import { BrowserProvider } from 'ethers';

export const initializePushUser = async () => {
  try {
    
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    
    const user = await PushAPI.initialize(signer, {
      env: CONSTANTS.ENV.STAGING, // Use CONSTANTS.ENV.PROD for mainnet
    });

    return user;
  } catch (error) {
    console.error('Error initializing Push user:', error);
  }
};

export const subscribeToChannel = async (channelAddress: string) => {
  try {
    const user = await initializePushUser();
    if (user) {
      await user.notification.subscribe(channelAddress);
      console.log(`Subscribed to ${channelAddress}`);
    }
  } catch (error) {
    console.error('Error subscribing to channel:', error);
  }
};

export const listenForNotifications = async () => {
  try {
    const user = await initializePushUser();
    if (user) {
      const stream = await user.initStream([CONSTANTS.STREAM.NOTIF]);

      stream.on(CONSTANTS.STREAM.NOTIF, (data) => {
        console.log('New notification:', data);
      });

      stream.connect();
    }
  } catch (error) {
    console.error('Error setting up notification stream:', error);
  }
  
};

