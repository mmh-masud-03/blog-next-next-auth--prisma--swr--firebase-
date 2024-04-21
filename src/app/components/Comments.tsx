import React, { FC, useState } from "react";
import Link from "next/link";
import Comment from "./Comment";
import useSWR from "swr";
import { useSession } from "next-auth/react";

interface CommentData {
  _id: string;
  createdAt: string;
  user: {
    name: string;
    image: string;
  };
  desc: string;
}

interface CommentsProps {
  postSlug: string;
}

const fetcher = async (url: string): Promise<CommentData[]> => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

const Comments: FC<CommentsProps> = ({ postSlug }) => {
  const { status } = useSession();
  const [desc, setDesc] = useState("");
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className="flex flex-row justify-between">
      <input
        type="text"
        placeholder="Enter your comment"
        className="w-10/12 bg-slate-300 outline-none px-3 py-1 rounded"
        onChange={(e) => setDesc(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-200 px-3 py-2 rounded-md"
      >
        Submit
      </button>
      {isLoading
        ? "Loading....."
        : data?.map((item) => <Comment key={item._id} item={item} />)}
    </div>
  );
};

export default Comments;
