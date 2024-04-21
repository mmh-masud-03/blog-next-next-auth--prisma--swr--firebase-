import Image from "next/image";

import Link from "next/link";
import { getData } from "./CategoryList";

interface Category {
  name: string;
  image: string;
  bg: string;
}

const Editors = async () => {
  const categories = await getData();

  return (
    <div className="mt-7">
      <p className="text-sm font-thin">Chosen by editor</p>
      <h1 className="font-bold text-2xl mb-7">Editors Pick</h1>
      {categories.map((category: Category) => (
        <div
          key={category.name}
          className="flex flex-row justify-between mb-4 items-center"
        >
          <div className="relative w-1/4 p-3">
            <Image
              src={category.image}
              alt=""
              width={30} // Adjust the width as needed
              height={30} // Adjust the height as needed
              className="rounded-[50%]"
            />
          </div>
          <Link href="/" className="flex flex-col w-3/4">
            <span className={`${category.bg} rounded-lg w-1/4 text-center`}>
              {category.name}
            </span>
            <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Editors;
