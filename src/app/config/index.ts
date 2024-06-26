import dotEnv from "dotenv";

dotEnv.config();

// export env variable
const PORT = process.env.PORT;
const PROD_DB_URL = process.env.PROD_DB_URL as string;
const DEV_DB_URL = process.env.DEV_DB_URL as string;

// node env variable for database url
const NODE_ENV = process.env.NODE_ENV;
let prod_url: string;

if (NODE_ENV === "DEV") {
  prod_url = DEV_DB_URL;
} else if (NODE_ENV === "PROD") {
  prod_url = PROD_DB_URL;
}

export { PORT, prod_url };
