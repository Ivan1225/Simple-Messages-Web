const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const MessageSchema = new Schema(
  {
    content: String,
    initial: {type: Boolean, default: false}
  },
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Message", MessageSchema);