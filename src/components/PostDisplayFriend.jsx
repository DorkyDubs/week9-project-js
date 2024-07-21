//? shows data from posts. ideally user, text and time. can be reordered for own, all and friends posts , order and sort by desc
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { dbConnect } from "@/utils/dbSetup";
import LeaveCommentBox from "./LeaveCommentBox";
import DisplayCommentsBox from "./DisplayPostCommentsBox";
export default async function PostDisplayFriend({ params, creds }) {
  //?credentials provide aauth_id number, but might get away with using params
  const db = dbConnect;

  const userId = auth().userId;
  const friendId = creds;

  const posts = (
    await db.query(
      ` SELECT * FROM posts  WHERE auth_id = $1 ORDER BY ID DESC LIMIT 20`,
      [friendId]
    )
  ).rows;

  return (
    <>
      {/* <MakePostBox /> */}
      {posts.map((post, index) => (
        <div key={post.id} className="border-t-2 border-blue-600">
          <h3>{post.post_text}</h3>
          <LeaveCommentBox id={post.id} friendId={post.auth_id} />
          <DisplayCommentsBox id={post.id} friendId={post.auth_id} />
        </div>
      ))}
    </>
  );
}
