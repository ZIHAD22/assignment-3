import mongoose, { connect } from "mongoose";
import app from "./app";
import { PORT, PROD_DB_URL } from "./app/config";

const main = async () => {
  await connect(PROD_DB_URL as string);
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log("Database Connected");
  });
};

main().catch((err) => console.log(err));
