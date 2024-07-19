import Image from "next/image";
import Link from "next/link";
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import UserInfoBox from "@/components/UserInfoBox";
import PostDisplay from "@/components/PostDisplay";
import SignThru from "@/components/SignInUp";

export default function Home() {
  const { userId } = auth();

  console.log("poop");
  console.log(userId);
  console.log("poop");
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>home page</h2>
        <SignedIn redirectUrl="">
          <Link href={`/user/${userId}`}>Go to homepage</Link>
        </SignedIn>
        <SignedOut>
          <SignThru />
        </SignedOut>
      </main>
    </>
  );
}
