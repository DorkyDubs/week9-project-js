import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import SignThru from "./SignInUp";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <Nav />
      <SignThru />
    </>
  );
}
