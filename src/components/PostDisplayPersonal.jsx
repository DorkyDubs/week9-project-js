//? shows data from posts. ideally user, text and time. can be reordered for own, all and friends posts , order and sort by desc
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { dbConnect } from "@/utils/dbSetup";
import LeaveCommentBox from "./LeaveCommentBox";
import DisplayCommentsBox from "./DisplayPostCommentsBox";
export default async function PostDisplayPersonal({ params, creds }) {
  //?credentials provide aauth_id number, but might get away with using params
  const db = dbConnect;
  const userId = auth().userId;

  const posts = (
    await db.query(
      ` SELECT * FROM posts  WHERE auth_id = $1 ORDER BY ID DESC LIMIT 20`,
      [userId]
    )
  ).rows;

  return (
    <>
      {/* <MakePostBox /> */}
      {posts.map((post, index) => (
        <div key={post.id}>
          <h2> {post.author_username} Says: </h2>
          <h3>{post.post_text}</h3>
          {/* <LeaveCommentBox id={post.id} friendId={userId} /> */}
          {/* ^^Requires it's own route/component on rediret there isn't time too constuct */}
          <DisplayCommentsBox id={post.id} friendId={userId} />
        </div>
      ))}
    </>
  );
}
