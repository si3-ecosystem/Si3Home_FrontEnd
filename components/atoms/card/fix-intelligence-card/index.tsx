"use client";

import { useState } from "react";
import Image from "next/image";
import urlFor from "@/utils/urlFor";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { CommentModal } from "@/components/organism/modal/comment-modal";

interface Post {
  title: string;
  image: string;
  description: string;
  badge: string;
  _id?: string;
}

export function FixIntelligenceCard({
  title,
  image,
  description,
  badge,
  _id,
}: Post) {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  return (
    <div className="group relative bg-white rounded-xl px-3 pt-2 pb-4 shadow-sm hover:shadow-md transition-shadow border-2 border-black border-opacity-30">
      {/* Post Image */}
      <div className="relative h-[208px]">
        <Image
          src={urlFor(image).url() || "/default-image.jpg"}
          alt={title || "No title available"}
          fill
          className="object-cover rounded-xl"
        />
        <div className="bg-white p-1.5 rounded-md text-xs absolute top-0 left-0 m-3">
          {badge}
        </div>
      </div>
      {/* Post Content */}
      <div className="mt-7">
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-7">
              <h3 className="font-semibold text-2xl uppercase">
                {title || "Untitled Post"}
              </h3>
              <p className="text-sm font-medium leading-5">
                {description || "No description available"}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsCommentModalOpen(true)}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                <ChatBubbleLeftIcon className="w-5 h-5" />
                Add Comment
              </button>
              <button className="w-2/3 mt-1.5 relative bg-white text-black py-3 rounded-full border border-black text-sm lg:text-xl font-medium hover:bg-black hover:text-white transition-colors">
                <span className="relative z-10 flex items-center justify-center gap-2.5">
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CommentModal
        isCommentModalOpen={isCommentModalOpen}
        setIsCommentModalOpen={setIsCommentModalOpen}
        _id={_id}
      />
    </div>
  );
}
