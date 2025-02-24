"use client";

import { useEffect, useState } from "react";
import { initializePushUser, subscribeToChannel, listenForNotifications } from "@/lib/pushClient";

interface Notification {
  title: string;
  body: string;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      const user = await initializePushUser();
      if (user) {
        const inbox = await user.notification.list("INBOX");
        setNotifications(inbox);
      }
    };

    fetchNotifications();
  }, []);

  // Handles both subscribing to a channel and listening for real-time notifications
  const handleSubscribeAndListen = async () => {
    const channelAddress = "eip155:1:0x0D54bD457AF5b5691d1D9790746d4C95f7885CFF"; // Replace with actual channel address

    try {
      await subscribeToChannel(channelAddress);
      setIsSubscribed(true);

      // Start listening for real-time notifications
      await listenForNotifications();
    } catch (error) {
      console.error("Error subscribing or listening:", error);
    }
  };

  return (
    <div>
      <button onClick={handleSubscribeAndListen} disabled={isSubscribed}>
        {isSubscribed}
      </button>

      <ul>
        {notifications.map((notif, index) => (
          <li key={index}>
            <strong>{notif.title}</strong>: {notif.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
