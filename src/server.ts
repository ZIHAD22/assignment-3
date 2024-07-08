import mongoose, { connect } from "mongoose";
import app from "./app";
import { NODE_ENV, PORT, prod_url } from "./app/config";

const main = async () => {
  try {
    await connect(prod_url);
    app.listen(PORT, () => {
      console.log(
        `Server is running on ${
          NODE_ENV === "DEV"
            ? `http://localhost:${PORT}`
            : "https://assingment-3-pi.vercel.app/"
        }`
      );
      console.log("Database Connected");
    });
  } catch (error) {
    console.log(error);
  }
};

main();
