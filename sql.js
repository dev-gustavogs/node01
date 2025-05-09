import 'dotenv/config'
import postgres from "postgres"

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

const sql = postgres(URL, { ssl: 'require' });

export default sql;
