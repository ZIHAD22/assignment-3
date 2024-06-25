import dotEnv from "dotenv";

dotEnv.config();

const PORT = process.env.PORT;

export { PORT };
