import React, { useEffect, useState } from "react";
import Image from "next/image";
import sanityClient from "@/lib/sanityClient";

interface Post {
  _id: string;
  title: string;
  image: string;
  description: string;
}

interface Comment {
  _id: string;
  name: string;
  email: string;
  text: string;
  postId: string;
  approved: boolean;
}

export function PostCard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Record<string, Comment[]>>({});
  const [newComment, setNewComment] = useState<
    Record<string, { name: string; email: string; comment: string }>
  >({});

  const fetchPosts = async () => {
    try {
      const data = await sanityClient.fetch(
        `*[_type == "post"]{
          _id,
          title,
          "image": mainImage.asset->url,
          "description": coalesce(body[0].children[0].text, "No description available")
        }`
      );
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      const data = await sanityClient.fetch(
        `*[_type == "comment" && approved == true]{
          _id,
          name,
          email,
          "text": comment,
          "postId": post->_id
        }`
      );
      const groupedComments = data.reduce(
        (acc: { [x: string]: any[] }, comment: { postId: string | number }) => {
          if (!acc[comment.postId]) acc[comment.postId] = [];
          acc[comment.postId].push(comment);
          return acc;
        },
        {}
      );
      setComments(groupedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleAddComment = async (postId: string) => {
    const newCommentData = newComment[postId];
    if (
      !newCommentData?.name ||
      !newCommentData?.email ||
      !newCommentData?.comment
    )
      return;

    try {
      const comment = {
        _type: "comment",
        name: newCommentData.name,
        email: newCommentData.email,
        comment: newCommentData.comment,
        post: { _type: "reference", _ref: postId },
        approved: false, // Default to not approved
      };
      await sanityClient.create(comment);

      // Reset new comment input fields
      setNewComment((prev) => ({
        ...prev,
        [postId]: { name: "", email: "", comment: "" },
      }));

      alert("Comment submitted for approval.");
      fetchComments(); // Refresh comments after submission
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchComments();
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div className="grid grid-cols-1  gap-6">
      {posts.map((post) => (
        <div
          key={post._id}
          className="group relative bg-white rounded-xl px-3 pt-2 pb-4 shadow-sm hover:shadow-md transition-shadow border-2 border-[#FAB7D0]"
        >
          {/* Post Image */}
          <div className="relative h-[208px]">
            <Image
              src={post.image || "/default-image.jpg"}
              alt={post.title || "No title available"}
              fill
              className="object-cover rounded-xl"
            />
            <div className="bg-white p-1.5 rounded-md text-xs absolute top-0 left-0 m-3">
              Funding
            </div>
          </div>
          {/* Post Content */}
          <div className="mt-7">
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-semibold text-2xl uppercase">
                    {post.title || "Untitled Post"}
                  </h3>
                  <p className="text-sm font-medium leading-5">
                    {post.description || "No description available"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-3">
            {comments[post._id]?.map((comment) => (
              <div key={comment._id} className="mb-4 p-2 border-b">
                <p>
                  <strong>{comment.name}</strong>
                </p>
                <p>{comment.text}</p>
              </div>
            ))}

            {/* Add Comment Form */}
            <div className="mt-3 relative z-10">
              <input
                type="text"
                placeholder="Your name"
                value={newComment[post._id]?.name || ""}
                onChange={(e) =>
                  setNewComment((prev) => ({
                    ...prev,
                    [post._id]: { ...prev[post._id], name: e.target.value },
                  }))
                }
                className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your email"
                value={newComment[post._id]?.email || ""}
                onChange={(e) =>
                  setNewComment((prev) => ({
                    ...prev,
                    [post._id]: { ...prev[post._id], email: e.target.value },
                  }))
                }
                className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Write a comment..."
                value={newComment[post._id]?.comment || ""}
                onChange={(e) =>
                  setNewComment((prev) => ({
                    ...prev,
                    [post._id]: { ...prev[post._id], comment: e.target.value },
                  }))
                }
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleAddComment(post._id)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
