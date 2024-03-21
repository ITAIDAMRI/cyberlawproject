import mongoose from "mongoose"

const connectDB = async () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => console.log("[DATABASE]\t\tDATABASE CONNECTED"))
    .catch((error) => console.log("[DTABASE]\t\tCONNECTION ERROR"))
}

export default connectDB

