import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-2xl mb-3">
        Hello This is Masud
      </h1>
      <p className="text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae natus
        iusto dolorem repellat minus eaque alias aut facere laudantium ipsam!
      </p>
      <div className="mt-10 flex flex-col md:flex-row items-center gap-12">
        <Image
          src="/images/p1.jpeg"
          alt=""
          height="200"
          width="500"
          className=" aspect-video"
        />
        <div>
          <h1 className="font-bold text-xl mb-4">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            dolore tempora, cumque magni sit ea porro amet! Laborum deleniti
            reprehenderit libero maxime iusto autem fuga maiores. Repellendus
            quis temporibus voluptatibus numquam iure enim nemo fugit minima
            delectus aperiam omnis quam ad neque esse perspiciatis asperiores
            doloribus, laboriosam aliquam? Ipsa, maiores.
          </p>
          <button className="bg-gray-400 px-4 py-3 rounded-md mt-4 hover:text-white place-self-end">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
