import pg from "pg";

const DbString = process.env.NEXT_PUBLIC_DB_CONNECTION;

export const dbConnect = new pg.Pool({
  connectionString: DbString,
});
