import React from "react";
import CardList from "../components/CardList";
import Menu from "../components/Menu";

interface BlogPageProps {
  searchParams: {
    page?: string;
    cat?: string;
  };
}

const BlogPage: React.FC<BlogPageProps> = ({ searchParams }) => {
  const { page: pageParam, cat } = searchParams;
  const page = pageParam ? parseInt(pageParam, 10) : 1;

  return (
    <div>
      <h1>Blog Page</h1>
      <div className="flex flex-row">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
