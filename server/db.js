const mongoose = require("mongoose");
const dbURL = "mongodb://127.0.0.1:27017/numbersTest";
const db = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
  } catch (error) {
    console.log("Unable to connect", error.message);
  }
};

module.exports = db;
