import { auth } from "@clerk/nextjs/server";
import { dbConnect } from "@/utils/dbSetup";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function LeaveCommentBox({ params, id, friendId }) {
  const { userId } = auth();
  async function handleComment(formData) {
    "use server";
    const db = dbConnect;
    const commenterData = (
      await db.query(`SELECT * FROM users WHERE auth_id = $1 `, [auth().userId])
    ).rows;
    const commenterUsername = commenterData.username;
    const commentText = formData.get("comment-box");

    db.query(
      `INSERT INTO comments (comment_text, no_of_likes, auth_id, author_username, made_by_friend, associated_post_number) VALUES $1,$2,$3,$4,$5,$6`,
      [commentText, 0, auth().userId, commenterUsername, null, id]
    );

    revalidatePath(`/user/${userId}`);
    redirect(`/user/aboutComments`);
  }

  return (
    <>
      <form action={handleComment}>
        <label htmlFor="comment-box">Leave a comment </label>
        <input
          className="text-black"
          type="text"
          name="comment-box"
          id="comment-box"
          placeholder="Share a response"
          required
        />{" "}
        <button type="submit" className="bg-blue-900 text-white ">
          Add Comment
        </button>
      </form>
    </>
  );
}
