import { auth } from "@clerk/nextjs/server";
import { dbConnect } from "@/utils/dbSetup";
import Link from "next/link";
export default async function FriendList() {
  const db = dbConnect;
  const { userId } = auth();

  const userData = (
    await db.query(`SELECT * FROM users where auth_id = $1`, [userId])
  ).rows;

  const userFriends = userData[0].friends_ids;

  return (
    <>
      {userFriends.map((friend, index) => (
        <div key={index} className="border-2 border-blue-400 text-black">
          <Link href={`/users/${userId}/${friend}`}>Visit Friend </Link>
        </div>
        // This was supposed to display user name and a few details but didn't set the sql correctly and ran out of the time to fix and implement
      ))}
    </>
  );
}
