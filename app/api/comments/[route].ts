// pages/api/comments/[id].ts
import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "h4ttr3aq",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
  token:
    "skRV8RuHbkstqPrEhoeD9nNQSiKm0Mm7buOfzGVKkOHP39Z0KqDwYryfFZaZbSnKw4elv5EeqKhpFwSvAUDgHwj74TPBIjjNyW6IPkIoTYg8Ali2jIsGVn9qxW8dzujlvSn0Yg7dMG3vL4FwDhJXI8awDQOhOH9qpX7yx8kSVEJbU43UWMPY", // Ensure this token has write permissions
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const comments = await sanityClient.fetch(
        `*[_type == "comment" && post._ref == $id && approved == true]{
          name, comment
        }`,
        { id }
      );
      res.status(200).json({ comments });
    } catch (error) {
      console.error("Error fetching comments:", error);
      res.status(500).json({ error: "Failed to fetch comments" });
    }
  } else if (req.method === "POST") {
    const { name, email, comment } = req.body;
    if (!name || !email || !comment) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const newComment = await sanityClient.create({
        _type: "comment",
        name,
        email,
        comment,
        post: { _type: "reference", _ref: id },
        approved: false, // Default to false for moderation
      });
      res.status(201).json({ newComment });
    } catch (error) {
      console.error("Error adding comment:", error);
      res.status(500).json({ error: "Failed to add comment" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
