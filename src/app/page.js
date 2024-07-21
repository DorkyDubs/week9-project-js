import Image from "next/image";
import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";
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
import UserInfoBox from "@/components/TheUserInfoBox";
import PostDisplay from "@/components/PostDisplayPersonal";
import SignThru from "@/components/SignInUp";
import { dbConnect } from "@/utils/dbSetup";
export default async function Home() {
  const { userId } = auth();
  const db = dbConnect;
  // const userData = (
  //   await db.query(`SELECT * FROM users WHERE auth_id = '${userId}'`)
  // ).rows;
  let progressLevel = 1;
  // if (userData.length > 0) {
  //   progressLevel = 100;
  // }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>home page</h2>
        <SignedIn>
          <div className="">
            <Link href={`/user/${userId}`} className="">
              Go to homepage
            </Link>
            <ProgressBar percentage={progressLevel} />
          </div>
        </SignedIn>
        <SignedOut>
          <SignThru />
        </SignedOut>
      </main>
    </>
  );
}
