//import connection to db --> need user table in db
//?id, clerk_id, username, bio, location
//! import clerk stuff

//TODO set up env.local
//TODO need a util file with connection set up
import FirstBox from "@/components/FirstBox";
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import {
  auth,
  currentUser,
  OrganizationMembershipPublicUserData,
} from "@clerk/nextjs/server";
import { dbConnect } from "@/utils/dbSetup";
//?import next path stuff
import { redirect } from "next/navigation";

import { revalidatePath } from "next/cache";

export default function UserIdPage() {
  // //need to destructure user id from clerk auth
  // //! userId is a alphanumerical string that clerk creates After users signs up through clerk in signup page (<Signup/>)
  // //? will ne null if no signup

  // const { userId } = auth();

  // //need form for user to add data
  // //need a hanflesubmit for form

  // function handlesubmit(formData) {
  //   //?specifiy in server

  //   // activate dbconnection
  //   //need to get the form data input
  //   const name = formData.get("name");

  //   //!submit data to db

  //   // await Db.query(`INSERT    INTO       (clerk_id, etc) VALUES $1,$2,$3,$3), [userId]);

  //   //?need to revalidate path
  //   //redirect
  // }

  return (
    <>
      <h4>user data</h4>
      <FirstBox />
      {/* form here please */}

      {/* once in db can show userdata here */}
      {/* import {currentUser} from clerk,etc 
check is we have current user data
if (userId) { add query to get user data}*/}

      {/* //!access current user data
const userInfo = await currentUser();
//? Will give login info like email, etc  in an awkward array

<h3>current user: {userData?.firstName}</h3>
 ?. can be used to check is valid in js too!  and return undefined and not break
 also use a conditional render . tenary!
 
 */}
    </>
  );
}
