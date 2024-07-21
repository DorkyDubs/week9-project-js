//to display users own info on page and other user info when on their page
import { dbConnect } from "@/utils/dbSetup";
import { auth } from "@clerk/nextjs/server";
import AddFriend from "./AddFriendButton";
export default async function OtherUserInfoBox(params, creds) {
  //?credentials provide aauth_id number, but might get away with using params
  const db = dbConnect;
  const userId = auth().userId;

  let userData = (
    await db.query(` SELECT * FROM users WHERE auth_id = $1`, [params.creds])
  ).rows;

  userData = userData[0];

  return (
    <>
      <div className="text-black bg-white border-2 border-teal-400">
        <h2>
          {userData.username}
          {"  "} {userData.age}, from {userData.location}
        </h2>
        <h3>{userData.bio}</h3>
        <h4>{userData.extra_fact}</h4>
        <h3>
          {" "}
          Followers : {userData.no_of_followers} Following :{" "}
          {userData.no_following}
        </h3>
        <AddFriend friendId={userData.auth_id} />
      </div>
    </>
  );
}
