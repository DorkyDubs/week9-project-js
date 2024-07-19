import { SignUp } from "@clerk/nextjs";

export default function Signup() {
  return (
    <>
      <p>sign up please</p>

      <SignUp />
    </>
  );
}

//! make sure user ees this page firt before they can complete own profile page

//?reason being when made here clerk assigns userId
