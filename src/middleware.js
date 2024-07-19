//copy template from docs. is in ts but also works as js

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

//? want to tell clerk what routes are protected
const isProtectedRoute = createRouteMatcher(["/user(.*)", "/othersub(.*)"]);
// /othersub(.*) means anything and verything that comeafter thatfolder, incluing dynamic variations ^

//! to define public and protected routes we have specified as protected
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

// 'if there is a request listed in routermatch variable use authorisation protection'

//? the matcher is finding a correlation between your routes and the routes you specified in clerkMiddleware()

// the matcher is written using regex
//? regex: 'regular expressions' (regex) are used to find matches in patterns

//! don't change he line below
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

//? ^^^ find any matches where route starts with this (/) symbol, and allow all following characters (asterisks mean 'anything'), and thing that resemble api's
