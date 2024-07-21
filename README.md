User Stories
🐿️ As a user, I am able to sign up for an account and create a user profile ✅
🐿️ As a user, I am able to log in and out of my account ✅
🐿️ As a user, I am able to create posts on my profile timeline✅
🐿️ As a user, I am able to see all posts by all users on a global timeline✅
Stretch Stories
🐿️ As a user, I am able to see a list of other user's posts and/or profiles on the site✅
🐿️ As a user, I am able able to visit other user profiles✅
🐿️ As a user, I am able to follow other users✅
🐿️ As a user, I am able to like posts I think are good, and see how many likes a post has ❌
Requirements
//TODO
make solid plan
concentrate on authentication
db schema: need at least two tables: user (with clerk_id)
and a posts table (coonect to usersby clerk_id-> foriegn key in posts table) one to many, one user many posts
if doing stretch need junction for follows/ many-to-many
-maybe another if doing likes

-VERY IMORTANT: when deploting to vercel remeber to ass ALL the env vars (clerk and db)

if using typesxript, make sure you don't have type errors, they will break deployment

🎯 Use Clerk.com to set up user signup and login.✅

🎯 Use the Clerk userId to associate posts with a user.✅

🎯 Enable each user to create a profile associated with their userId, and a form to input their biography and location data, etc. with a URL similar to /user/[userId].✅

🎯 Enable users to create posts associated with the userId, and display those posts on the user's profile page✅

🎯 Show a 404 error if a user profile doesn't exist ❌

🎯 Use at least 1 Radix UI Primitive or similar ✅

Stretch Goals
🏹 Enable users to visit other user profiles after seeing their posts on a global timeline✅

🏹 Enable users to follow other users by creating a follower and follwee relationship between two user profiles✅

🏹 Enable users to like other users' posts by creating a user_id and liked_post relationship in a junction table❌

🏹 A user's biography cannot be blank. If a user logs in but doesn't have a biography set, they should be asked to fill one in✅

if make nre stretch goal state here

🤤

Please also provide an assignment reflection in your project README.md file.
(Required)
🎯 Please mention the requirements you met and which goals you achieved for this assignment.
I did ticks, and crosse because I thought it was more fun.

🎯 Were there any requirements or goals that you were not quite able to achieve?
My 404 didn't work right, ran over and out of time to fix due to primitives, destructuring and an unexpected lack of internet access which made the clerk elements kind of awkward to test.

🎯 If so, could you please tell us what was it that you found difficult about these tasks?
desructuring mainly. it is not very intuitive
and primitives. They are not simple to understand either, though feel like I could design my own progress bar now after staring at it for so long.

(Optional)
🏹 Feel free to add any other reflections you would like to share about your submission e.g.

My time management sucks.

What went really well and what could have gone better?

IT partly, got some good basis for added functions, but a lot also doesn't quite work
Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
geeks for geeks, another one I lost
Describing errors or bugs you encountered while completing your assignment.

multiaccount testing with clerks wasn't easy. Hence why everythign is so sparse. destructuring. I wish I could see into variables easier.
PRimitives, they're awkard. abandoned the progress bar and used another simple one as a cop out

Requesting feedback about a specific part of your submission.

Let me know if my tears stained anything and made parts hard to read.
