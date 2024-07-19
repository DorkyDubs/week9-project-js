import { dbConnect } from "@/utils/dbSetup";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
export default async function BioBox() {
  const db = dbConnect;
  async function submitHandle(formData) {
    "use server";
    const db = dbConnect;
    const authId = auth();
    const currentUser = await currentUser();
    console.log(currentUser);
    const userName = currentUser.username;
    console.log(userName);
    const userBio = formData.get("user-bio");
    const userAge = formData.get("user-age");
    const userLocation = formData.get("user-location");
    const userFact = formData.get("user-fact");

    await db.query(
      `INSERT INTO users ( auth_id, username, bio,extra_fact, age ,location, no_of_followers,no_following, friends_ids) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      [authId, userName, userBio, userFact, userAge, userLocation, 0, 0, null]
    );
  }

  return (
    <>
      <form action={submitHandle}>
        <label htmlFor="Username">Username: </label>
        <input
          className="text-black"
          type="text"
          name="username"
          id="username"
          placeholder="choose a username"
          required
        />
        <label htmlFor="user-bio">Bio: </label>
        <input
          className="text-black"
          type="text"
          name="user-bio"
          id="user-bio"
          placeholder="Share a little about yourself"
          required
        />
        <label htmlFor="Age">Age: </label>
        <input
          className="text-black"
          type="number"
          name="user-age"
          id="user-age"
          placeholder="Enter Age"
          required
        />

        <label htmlFor="location">Location: </label>
        <input
          className="text-black"
          type="text"
          name="user-location"
          id="user-location"
          placeholder="Approx location"
          required
        />

        <label htmlFor="extra-fact">Extra fact: </label>
        <input
          className="text-black"
          type="text"
          name="user-fact"
          id="user-fact"
          placeholder="A fact"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
