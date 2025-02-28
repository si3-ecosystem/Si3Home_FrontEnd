"use client";

import { useEffect, useState } from "react";
import { initializePushUser, subscribeToChannel, listenForNotifications } from "@/lib/pushClient";

interface Notification {
  title: string;
  message: string;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const channelAddress = "eip155:1:0x0D54bD457AF5b5691d1D9790746d4C95f7885CFF"; // Replace with actual channel

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const user = await initializePushUser();
        if (user) {
          const inbox = await user.notification.list("INBOX");
          
          // Ensure correct format for notifications
          const formattedNotifications = inbox.map((notif: any) => ({
            title: notif.title || "New Notification",
            message: notif.message || "No message content",
          }));

          setNotifications(formattedNotifications);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  const handleSubscribeAndListen = async () => {
    try {
      await subscribeToChannel(channelAddress);
      setIsSubscribed(true);
      console.log("Subscribed to channel:", channelAddress);

      // Start listening for real-time notifications
      await listenForNotifications();

      // Simulate notification updates in UI
      setTimeout(() => {
        setNotifications((prev) => [
          ...prev,
          { title: "Test Notification", message: "This is a simulated real-time notification!" },
        ]);
      }, 3000); // Mocking a real-time update after 3 seconds
    } catch (error) {
      console.error("Error subscribing or listening:", error);
    }
  };

  return (
    <div>
      <button onClick={handleSubscribeAndListen} disabled={isSubscribed}>
        {isSubscribed ? "Subscribed" : "Subscribe"}
      </button>

      <ul>
        {notifications.length > 0 ? (
          notifications.map((notif, index) => (
            <li key={index}>
              <strong>{notif.title}</strong>: {notif.message}
            </li>
          ))
        ) : (
          <p>No notifications yet.</p>
        )}
      </ul>
    </div>
  );
};

export default Notifications;
