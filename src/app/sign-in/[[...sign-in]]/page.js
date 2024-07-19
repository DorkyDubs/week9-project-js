import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <>
      <h4>Oi, who are you?</h4>
      <SignIn />
    </>
  );
}
