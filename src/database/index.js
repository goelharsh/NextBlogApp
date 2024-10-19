import mongoose from "mongoose";

const connectDB = async()=>{
    const connectionUrl = 'mongodb+srv://harshgoel626:YpJTI2N6dJzCta8X@cluster0.igur90m.mongodb.net/nextBlogApp'

    ;(await mongoose.connect(connectionUrl)).isObjectIdOrHexString(()=> console.log('DB Connected Successfully'))
    .catch(()=> console.log('Unable to connect DB'))
}

export default connectDB  