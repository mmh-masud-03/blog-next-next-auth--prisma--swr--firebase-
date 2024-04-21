"use client";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Login = () => {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <div>Loading......</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="bg-slate-400 flex flex-col justify-around items-center w-1/3 h-[50vh] rounded place-self-center mx-auto my-16 text-white">
      <div
        className="bg-red-600 rounded px-3 py-2"
        onClick={() => signIn("google")}
      >
        Login With Google
      </div>
      <div className="bg-gray-800 rounded px-3 py-2 ">Login with Github</div>
      <Link href="" className="bg-blue-700 rounded px-3 py-2">
        Login with Facebook
      </Link>
    </div>
  );
};

export default Login;
