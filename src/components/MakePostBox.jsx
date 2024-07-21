import { auth } from "@clerk/nextjs/server";
import { dbConnect } from "@/utils/dbSetup";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function MakePostBox({ params }) {
  const db = dbConnect;

  async function postSubmit(formData) {
    "use server";
    const { userId } = auth();
    // userId = userId.userId;

    const db = dbConnect;
    const newPost = formData.get("new-post");
    const userData = (
      await db.query(`SELECT * FROM users WHERE auth_id = '${userId}'`)
    ).rows;
    const userName = userData[0].username;
    const authorId = userData[0].id;

    db.query(
      `INSERT INTO posts (post_text,author_username,author_id, auth_id,no_of_comments, no_of_likes) VALUES ($1,$2,$3,$4,$5,$6)`,
      [newPost, userName, authorId, userId, 0, 0]
    );
    revalidatePath(`/user/${userId}`);
    redirect(`/user/${userId}`);
  }

  return (
    <>
      <form action={postSubmit}>
        <label htmlFor="post"> Share some thoughts: </label>

        <input
          className="text-black"
          type="text"
          name="new-post"
          id="new-post"
          placeholder="Enter new post content here"
          required
        ></input>
        <button type="submit" className="bg-green-300 text-black">
          Post
        </button>
      </form>
    </>
  );
}
