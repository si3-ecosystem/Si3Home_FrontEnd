"use client";
import Modal from "@/components/shared/Modal";
import sanityClient from "@/lib/sanityClient";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface CommentFormData {
  name: string;
  email: string;
  comment: string;
}

export function CommentModal({
  isCommentModalOpen,
  setIsCommentModalOpen,
  _id,
}: {
  isCommentModalOpen: boolean;
  setIsCommentModalOpen: (isOpen: boolean) => void;
  _id: any;
}) {
  const [commentFormData, setCommentFormData] = useState<CommentFormData>({
    name: "",
    email: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCommentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCommentFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddComment = async () => {
    if (!_id) return;
    if (
      !commentFormData.name ||
      !commentFormData.email ||
      !commentFormData.comment
    ) {
      toast.error("Please fill all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const comment = {
        _type: "comment",
        name: commentFormData.name,
        email: commentFormData.email,
        comment: commentFormData.comment,
        post: { _type: "reference", _ref: _id },
        approved: false,
      };
      await sanityClient.create(comment);

      setCommentFormData({
        name: "",
        email: "",
        comment: "",
      });

      toast.success("Comment submitted for approval.");
      setIsCommentModalOpen(false);
    } catch (error) {
      console.error("Error adding comment:", error);
      toast.error("Failed to submit comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Modal
      isOpen={isCommentModalOpen}
      onClose={() => setIsCommentModalOpen(false)}
      className="w-full max-w-lg"
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Add a Comment</h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={commentFormData.name}
              onChange={handleCommentChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={commentFormData.email}
              onChange={handleCommentChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700"
            >
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              value={commentFormData.comment}
              onChange={handleCommentChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              placeholder="Write your comment here..."
              required
            />
          </div>
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={() => setIsCommentModalOpen(false)}
              disabled={isSubmitting}
              className="inline-flex justify-center py-2 px-4 border border-black border-opacity-30 shadow-sm text-sm font-medium rounded-md  text-black bg-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAddComment}
              disabled={isSubmitting}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Comment"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
