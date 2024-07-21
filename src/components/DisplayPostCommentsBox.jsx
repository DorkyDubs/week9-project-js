import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { dbConnect } from "@/utils/dbSetup";

export default async function DisplayCommentsBox(id) {
  const { userId } = auth();
  const commentData = (
    await dbConnect.query(`SELECT * FROM comments WHERE id = ${id.id}`)
  ).rows;

  return (
    <>
      {commentData.map((comment, index) => (
        <div key={comment.id} className="border-2 border-white">
          <h3>{commentData.author_username} Says</h3>
          <h4> {commentData.comment_text}</h4>
          <p>{commentData.made_by_friend} friend</p>
          <Link href={`/user/${userId}/${commentData.auth_id}`}> Visit</Link>
        </div>
      ))}
    </>
  );
}
