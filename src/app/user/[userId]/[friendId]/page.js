//import connection to db --> need user table in db
//?id, clerk_id, username, bio, location
//! import clerk stuff

//TODO set up env.local
//TODO need a util file with connection set up
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

export default function FriendIdPage() {
  const { userId } = auth();
  const db = dbConnect;
}
