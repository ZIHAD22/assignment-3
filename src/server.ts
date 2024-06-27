import mongoose, { connect } from "mongoose";
import app from "./app";
import { PORT, prod_url } from "./app/config";

const main = async () => {
  try {
    await connect(prod_url);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      console.log("Database Connected");
    });
  } catch (error) {
    console.log(error);
  }
};

main();
