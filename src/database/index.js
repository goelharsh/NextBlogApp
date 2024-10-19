import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://harshgoel626:YpJTI2N6dJzCta8X@cluster0.igur90m.mongodb.net/nextBlogApp";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("blog database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;