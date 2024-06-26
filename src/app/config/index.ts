import dotEnv from "dotenv";

dotEnv.config();

const PORT = process.env.PORT;
const PROD_DB_URL = process.env.PROD_DB_URL;
const DEV_DB_URL = process.env.DEV_DB_URL;

export { PORT, PROD_DB_URL, DEV_DB_URL };
