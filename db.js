function MongoDb(collectionName) {
  require("dotenv").config();
  require("mongoose").connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (re) => {
      console.log("Connected to MongoDB");
    }
  );
}
module.exports = MongoDb;
