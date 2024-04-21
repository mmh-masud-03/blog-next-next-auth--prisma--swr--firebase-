import React from "react";
import Link from "next/link";
import Editors from "./Editors";
import { getData } from "./CategoryList";
interface CategoryType {
  id: number;
  name: string;
  bg: string;
}
const Menu = async () => {
const categories = await getData();

  return (
    <div className="flex flex-col w-1/2">
      <div className="flex flex-col mb-4">
        <h1 className="text-2xl font-bold mb-6">Most Popular</h1>
        {categories.map((category: CategoryType) => (
          <Link href="/">
            <div
              className={`${category.bg} h-6 w-10 rounded-lg text-xs text-center capitalize mt-4 mb-1`}
            >
              {category.name}
            </div>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo.
            </h1>
            <p className="text-xs font-extralight mt-1">
              <span className="font-semibold">John Doe - </span>
              <span>1.09.2023</span>
            </p>
          </Link>
        ))}
      </div>
      <h2 className="text-sm font-thin mt-6">Discover by topic</h2>
      <h1 className="text-2xl font-bold mb-10">Categories</h1>
      <Link href="/" className="grid grid-cols-3 gap-3">
        {categories.map((category: CategoryType) => (
          <div className={`${category.bg} rounded-lg w-auto text-center p-1 `}>
            {category.name}
          </div>
        ))}
      </Link>
      <Editors />
    </div>
  );
};

export default Menu;
