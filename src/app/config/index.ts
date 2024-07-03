import dotEnv from "dotenv";
import path from "path";

dotEnv.config({ path: path.join((process.cwd, ".env")) });

// export env variable
const PORT = process.env.PORT;
const PROD_DB_URL = process.env.PROD_DB_URL as string;
const DEV_DB_URL = process.env.DEV_DB_URL as string;
const BCRYPT_SR = process.env.BCRYPT_SR as string;
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET as string;

// node env variable for database url
const NODE_ENV = process.env.NODE_ENV;

let prod_url: string;

if (NODE_ENV === "DEV") {
  prod_url = DEV_DB_URL;
} else {
  prod_url = PROD_DB_URL;
}

export { PORT, prod_url, BCRYPT_SR, JWT_ACCESS_SECRET, NODE_ENV };
