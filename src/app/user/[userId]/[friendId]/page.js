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
import OtherUserInfoBox from "@/components/OtherUserInfoBox";

//?import next path stuff

import PostDisplayFriend from "@/components/PostDisplayFriend";
import UserInfoBox from "@/components/TheUserInfoBox";

export default function FriendIdPage({ params }) {
  const userId = auth().userId;
  const db = dbConnect;
  const friendId = params.friendId;

  return (
    <>
      <OtherUserInfoBox creds={friendId} />
      <PostDisplayFriend creds={friendId} />
    </>
  );
}
