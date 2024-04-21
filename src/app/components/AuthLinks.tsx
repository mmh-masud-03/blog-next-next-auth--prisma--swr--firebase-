"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { status } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <>
          <Link href="/write"> Write</Link>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <Link href="/login" className="my-auto">
          Login
        </Link>
      )}
      <div
        className="md:hidden w-5 h-4 flex flex-col justify-around place-self-center items-center"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div className="w-full h-[2px] bg-black"></div>
        <div className="w-full h-[2px] bg-black"></div>
        <div className="w-full h-[2px] bg-black"></div>
      </div>
      {openMenu && (
        <div className="flex flex-col w-full items-center gap-4 left-0 top-20 absolute">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {status === "authenticated" ? (
            <>
              <Link href="/write"> Write</Link>
              <Link href="logout">Logout</Link>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
