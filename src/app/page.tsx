import React, { FC } from "react";
import Featured from "./components/Featured";
import CategoryList from "./components/CategoryList";
import CardList from "./components/CardList";
import Menu from "./components/Menu";

interface HomeProps {
  searchParams: string;
}

const Home: FC<HomeProps> = ({ searchParams }) => {
  const page = parseInt(searchParams) || 1;
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex flex-row my-7">
        <CardList page={page} cat="fashion" />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
