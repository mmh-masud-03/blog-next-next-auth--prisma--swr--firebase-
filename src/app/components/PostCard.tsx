import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  title: string;
  desc: string;
  createdAt: string;
  catSlug: string;
  img: string;
}

interface PostCardProps {
  item: Post;
}

const PostCard: FC<PostCardProps> = ({ item }) => {
  const { title, desc, createdAt, catSlug, img } = item;
  return (
    <Link href="">
      <a className="flex flex-row mt-5 ">
        {img && (
          <Image
            src="/images/p1.jpeg"
            alt=""
            width={400}
            height={400}
            className="aspect-video rounded block"
          />
        )}
        <div className="ml-4 w-1/3">
          <span className="text-sm text-emerald-300">
            {createdAt}11.02.23-CULTURE{catSlug}
          </span>
          <h1 className="text-2xl font-bold mb-2">
            {title}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mb-5">
            {desc}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea numquam
            aliquid unde corrupti quae deserunt inventore eligendi ipsam
            doloribus excepturi?.....
          </p>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
