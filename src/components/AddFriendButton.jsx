import { dbConnect } from "@/utils/dbSetup";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function AddFriend(params) {
  const db = dbConnect;
  const { userId } = auth();
  const userData = (
    await db.query(`SELECT * FROM users where auth_id = $1`, [userId])
  ).rows;
  const friendData = (
    await db.query(`SELECT * FROM users where auth_id = $1`, [params.friendId])
  ).rows;

  const friendFollowers = friendData[0].no_of_followers + 1;
  const userFriend = userData.friends_ids; // returns a list of previously added friends
  const userfollowing = userData[0].no_following + 1;
  async function handleFriendReq(forData) {
    "use server";
    const db = dbConnect;
    const { userId } = auth();
    const userData = (
      await db.query(`SELECT * FROM users where auth_id = $1`, [userId])
    ).rows;
    const friendData = (
      await db.query(`SELECT * FROM users where auth_id = $1`, [
        params.friendId,
      ])
    ).rows;

    const friendFollowers = friendData[0].no_of_followers + 1;
    const userFriends = friendData[0].friends_ids;
    // returns a list of previously added friends
    const userfollowing = userData[0].no_following + 1;
    userFriends.push(params.friendId);

    db.query(
      `UPDATE users SET friend_ids = $1 WHERE auth_id = $2 RETURNING *`,
      [userFriends, userId]
    );
    db.query(
      `UPDATE users SET no_following = $1 WHERE auth_id = $2 RETURNING *`,
      [userfollowing, userId]
    );
    db.query(
      `UPDATE users SET no_of_followers = $1 WHERE auth_id = $2 RETURNING *`,
      [friendFollowers, params.friendId]
    );

    revalidatePath(`/user/${params.userId}/${params.friendId}`);
    redirect(`/user/${params.userId}/${params.friendId}`);
  }

  if (friendData[0].friends_ids.includes(params.friendId) === false) {
    return (
      <>
        <form action={handleFriendReq}>
          <button className="bg-blue-300 border-2 border-cyan-400">
            Follow Friend
          </button>
        </form>
      </>
    );
  }
}
