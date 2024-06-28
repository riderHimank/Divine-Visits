const mongoose = require("mongoose");
// const { number } = require('zod');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  address: String,
});

const users = mongoose.model("users", UserSchema);

module.exports = users;
