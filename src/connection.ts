import monggoose from "mongoose";
import dotenv from "./config/dotenv";
const connectionMongoDB = async () => {
     const dbUrl = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.geggknt.mongodb.net/?appName=Cluster0`
    
    return mongoose.connect(`${dbUrl}`)
    .then(() => console.log("database connected"))
    .catch((err) => {
        console.log("error while connecting database", err);
    })
}

export default connectionMongoDB;