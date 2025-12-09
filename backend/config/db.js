import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rp285518_db_user:quizapp2710@cluster0.c5jk2m4.mongodb.net/QuizApp"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
