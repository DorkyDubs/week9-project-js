import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import HoverBox from "./HoverPrimative";
export default function Nav() {
  const { userId } = auth();
  return (
    <>
      <div className="text-white">
        {"- - -"}
        <Link href={`/user/${userId}`}>Home page</Link>
        {"- - -"}
        <Link href={`/user/${userId}/allPosts`}>All Posts</Link>
        {"- - -"}
        <Link href={`/user/${userId}/friendList`}>See Following</Link>
        {"- - -"}
        <HoverBox />
      </div>
    </>
  );
}
