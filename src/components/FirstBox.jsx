// we want this to either give the biobox or send to homepage.
import { auth } from "@clerk/nextjs/server";
import BioBox from "./BioBox";
import TheUserInfoBox from "./TheUserInfoBox";
import PostDisplayPersonal from "./PostDisplayPersonal";
import { dbConnect } from "@/utils/dbSetup";
import MakePostBox from "./MakePostBox";
import PostDisplayAll from "./PostDIsplayAll";
export default async function FirstBox() {
  "use server";
  const db = dbConnect;
  const userId = auth().userId;

  // let userData;
  // try {
  const userData = (
    await db.query(`SELECT * FROM users WHERE auth_id = $1`, [userId])
  ).rows;

  if (userData.length > 0) {
    return (
      <>
        <TheUserInfoBox creds={`${userId}`} />
        {/* <PostDisplayAll /> */}
        <MakePostBox />
        <PostDisplayPersonal creds={userId} />
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
