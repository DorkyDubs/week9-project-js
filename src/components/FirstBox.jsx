// we want this to either give the biobox or send to homepage.
import { auth } from "@clerk/nextjs/server";
import BioBox from "./BioBox";
import UserInfoBox from "./UserInfoBox";
import PostDisplay from "./PostDisplay";
import { dbConnect } from "@/utils/dbSetup";

export default async function FirstBox() {
  "use server";
  const db = dbConnect;
  const { userId } = auth();
  console.log(userId);
  let dataGotFetched = false;
  // let userData;
  // try {
  const userData = (
    await db.query(`SELECT * FROM users WHERE auth_id = '${userId}'`)
  ).rows;

  console.log("fsk");
  console.log(userData);
  //   console.log(dataGotFetched);
  //   dataGotFetched = true;
  //   console.log(dataGotFetched);
  // } catch {
  //   console.log(dataGotFetched);
  // }
  if (userData.length > 0) {
    return (
      <>
        <UserInfoBox />
        <PostDisplay />
      </>
    );
  } else {
    return (
      <>
        <BioBox />
      </>
    );
  }
}
