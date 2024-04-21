import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-row justify-around my-9">
      <div className="flex flex-col gap-1 w-1/2 ">
        <div className="flex flex-row font-bold">
          <Image
            src="/images/coding.png"
            alt=""
            width={20}
            height={20}
            className="rounded-[50%]  mr-3"
          />
          <h1>Masud Blog</h1>
        </div>

        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            beatae non aut accusantium nemo asperiores.
          </p>
          <div className="flex flex-row mt-2 gap-1">
            {" "}
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              height={24}
              width={24}
            />
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              height={24}
              width={24}
            />
            <Image
              src="/images/tiktok.png"
              alt="Tiktok"
              height={24}
              width={24}
            />
            <Image
              src="/images/youtube.png"
              alt="Youtube"
              height={24}
              width={24}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around gap-10">
        <div className="flex flex-col gap-1">
          <span className="font-bold mb-2">Links</span>
          <Link href="">Homepage</Link>
          <Link href="">Blog</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold mb-2">Tags</span>
          <Link href="">Style</Link>
          <Link href="">Fashion</Link>
          <Link href="">Coding</Link>
          <Link href="">Travel</Link>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold mb-2">Social</span>
          <Link href="">Facebook</Link>
          <Link href="">Instagram</Link>
          <Link href="">Tiktok</Link>
          <Link href="">Youtube</Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
