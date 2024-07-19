User Stories
🐿️ As a user, I am able to sign up for an account and create a user profile
🐿️ As a user, I am able to log in and out of my account
🐿️ As a user, I am able to create posts on my profile timeline
🐿️ As a user, I am able to see all posts by all users on a global timeline
Stretch Stories
🐿️ As a user, I am able to see a list of other user's posts and/or profiles on the site
🐿️ As a user, I am able able to visit other user profiles
🐿️ As a user, I am able to follow other users
🐿️ As a user, I am able to like posts I think are good, and see how many likes a post has
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

🎯 Use Clerk.com to set up user signup and login.

🎯 Use the Clerk userId to associate posts with a user.

🎯 Enable each user to create a profile associated with their userId, and a form to input their biography and location data, etc. with a URL similar to /user/[userId].

🎯 Enable users to create posts associated with the userId, and display those posts on the user's profile page

🎯 Show a 404 error if a user profile doesn't exist

🎯 Use at least 1 Radix UI Primitive or similar

Stretch Goals
🏹 Enable users to visit other user profiles after seeing their posts on a global timeline

🏹 Enable users to follow other users by creating a follower and follwee relationship between two user profiles

🏹 Enable users to like other users' posts by creating a user_id and liked_post relationship in a junction table

🏹 A user's biography cannot be blank. If a user logs in but doesn't have a biography set, they should be asked to fill one in

if make nre stretch goal state here

Please also provide an assignment reflection in your project README.md file.
(Required)
🎯 Please mention the requirements you met and which goals you achieved for this assignment.

🎯 Were there any requirements or goals that you were not quite able to achieve?

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

(Optional)
🏹 Feel free to add any other reflections you would like to share about your submission e.g.

What went really well and what could have gone better?
Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
Describing errors or bugs you encountered while completing your assignment.
Requesting feedback about a specific part of your submission.
