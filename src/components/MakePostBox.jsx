import { auth } from "@clerk/nextjsserver";
import { dbConnect } from "@/utils/dbSetup";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function MakePostBox({ params }) {
  const db = dbConnect;

  async function postSubmit(formData) {
    const authId = auth();
    const db = dbConnect;
    const newPost = formData.get("new-post");
    const userName = (
      await db.query(`SELECT username FROM users WHERE auth_id = '${authId}'`)
    ).rows;
    console.log(userName);

    db.query(
      `INSERT INTO posts (posts_text,author_username,auth_id,no_of_comments, no_of_likes,) VALUES ($1,$2,$3,$4,$5)`,
      [{ newPost }, { username }, { authId }, 0, 0]
    );
    revalidatePath(`/${params.userId}`);
    redirect(`/${params.userId}`);
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
