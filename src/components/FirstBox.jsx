// we want this to either give the biobox or send to homepage.
import { auth } from "@clerk/nextjs/server";
import BioBox from "./BioBox";
import UserInfoBox from "./UserInfoBox";
import PostDisplay from "./PostDisplay";
import { dbConnect } from "@/utils/dbSetup";

export default async function FirstBox() {
  const db = dbConnect;
  const { userId } = auth();
  console.log(userId);
  const userData = (
    await db.query(`SELECT * FROM users WHERE auth_id = '${userId}'`)
  ).rows;
  console.log(userData.bioCheck);
  if (userData === false || userData === undefined) {
    return (
      <>
        <BioBox />
      </>
    );
  } else {
    return (
      <>
        <UserInfoBox cred={userData} />
        <PostDisplay cred={userData} />
      </>
    );
  }
}
