import UserInfoBox from "@/components/TheUserInfoBox";
import PostDisplayAll from "@/components/PostDIsplayAll";
export default function seeAllPosts({ params }) {
  return (
    <>
      <UserInfoBox creds={params.userId} />
      <PostDisplayAll />
    </>
  );
}
