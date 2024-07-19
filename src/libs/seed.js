import { dbConnect } from "@/utils/dbSetup";
db = dbConnect();

db.query(`CREATE IF NOT EXSISTS users (id SERIAL PRIMARY KEY,
    username TEXT,auth_id TEXT,bio TEXT, age NUMBER, location TEXT, no_of_followers NUMBER, no_following NUMBER,
    friends_ids ARRAY
    )`);

db.query(`CREATE IF NOT EXSISTS posts(id SERIAL PRIMARY KEY,
        post_text TEXT,
        no_of_likes NUMBER,no_of_comments NUMBER,
        auth_id TEXT,
        author_username TEXT REFERENCE users (auth_id)
        )`);

db.query(`CREATE IF NOT EXSISTS comments (id SERIAL PRIMARY KEY,
            comment_text TEXT,
            no_of_likes NUMBER,
            auth_id TEXT,
            author_username TEXT REFERENCE users (auth_id),
            made_by_friend BOOLEAN,
            associated_post_id NUMBER
            )`);

db.query(`CREATE IF NOT EXSISTS junction (id SERIAL PRIMARY KEY,
                follower_id_auth TEXT,
                to_follow_id_auth TEXT,
                accepted BOOLEAN,
                mutual_follow BOOLEAN )`);

db.query(`CREATE IF NOT EXSISTS pending_friends (id SERIAL PRIMARY KEY,
                    follower_id TEXT,
                    followee_id TEXT,
                    responded BOOLEAN)`);
