import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between pt-5 items-center">
      <div className="hidden md:flex flex-row gap-2">
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
        <Image src="/images/tiktok.png" alt="Tiktok" height={24} width={24} />
        <Image src="/images/youtube.png" alt="Youtube" height={24} width={24} />
      </div>
      <div className="font-semibold text-xl">Masud Blog </div>
      <div className="flex flex-row gap-4 font-semibold text-xl my-auto">
        <ThemeToggle />
        <div className="hidden md:flex gap-3">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>

        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
