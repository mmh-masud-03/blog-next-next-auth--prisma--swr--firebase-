import Comments from "@/app/components/Comments";
import Menu from "@/app/components/Menu";
import Image from "next/image";
import React from "react";
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const page = async ({ params }) => {
  const { slug } = params;
  const data = getData(slug);
  return (
    <div className="flex flex-col justify-between items-center mt-12 mx-10">
      <div className="flex flex-row ">
        <div className="flex flex-col justify-center w-1/2">
          <span className="text-2xl font-extrabold ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, voluptatem! {data?.title}
          </span>
          <div className="flex flex-row justify-start gap-2 w-1/4 items-center mt-5">
            <Image
              src="/images/p1.jpeg"
              alt=""
              width={20}
              height={20}
              className="rounded-[50%] block"
            />
            <p className="flex flex-col">
              <span className="font-bold">John Doe{data.author}</span>
              <span className="font-thin text-sm">10.11.2024</span>
            </p>
          </div>
        </div>
        <Image
          src="/images/p1.jpeg"
          alt=""
          width={500}
          height={500}
          className="aspect-video"
        />
      </div>
      <div className="flex flex-row justify-between gap-4 mt-6">
        <div className="w-2/3 pr-7">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            excepturi, mollitia ea animi dolorum amet. Inventore iure harum
            pariatur quibusdam magni eius nostrum, facere vero quisquam? At
            vitae doloribus aliquid cum, ullam quod minima placeat molestias quo
            architecto accusamus fugit quidem est eius tempora amet maxime
            perspiciatis nihil. Architecto harum voluptate reprehenderit
            deserunt labore rem accusantium possimus nostrum suscipit saepe
            explicabo animi neque distinctio cum at repudiandae unde autem eum,
            blanditiis aspernatur, minus natus? Rem aperiam porro odio
            asperiores eos, nam voluptas iure maxime explicabo amet maiores
            necessitatibus at, labore quae beatae fugiat, ducimus consectetur.
            Perspiciatis quos assumenda aspernatur unde ex quaerat? Voluptate
            minima ea ipsum, quibusdam veniam dolorem adipisci consectetur eum a
            deleniti inventore. Ab, culpa harum, fugiat quaerat eum illum nihil
            soluta explicabo corporis aspernatur velit asperiores, illo
            doloribus? Distinctio id labore et, dolor delectus inventore
            laudantium blanditiis at necessitatibus tempora nulla, nisi
            quibusdam dolores, minima voluptate. Delectus nesciunt distinctio
            ipsa dignissimos atque commodi quibusdam ex ullam voluptatem
            explicabo quos cumque harum omnis rem soluta, praesentium ut neque
            sed. Esse culpa quas laboriosam debitis laborum unde ipsum voluptate
            mollitia deserunt repellendus quis ullam vitae eius suscipit
            voluptas accusamus fugiat quod vel, ut cum quo at reiciendis?
            Doloremque, recusandae?
          </p>
          <Comments slug={slug} />
        </div>
        <div className="">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default page;
