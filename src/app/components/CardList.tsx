import React, { FC } from "react";
import PostCard from "./PostCard";
import Pagination from "./Pagination";

interface Post {
  // Define the properties of a post here
}

interface Data {
  posts: Post[];
  count: number;
}

const getData = async (page: number, cat: string): Promise<Data> => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

interface CardListProps {
  page: number;
  cat: string;
}

interface Post {
  title: string;
  desc: string;
  createdAt: string;
  catSlug: string;
  img: string;
}

const CardList: FC<CardListProps> = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className="w-3/4">
      {posts?.map((item) => (
        <PostCard item={item} />
      ))}
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
