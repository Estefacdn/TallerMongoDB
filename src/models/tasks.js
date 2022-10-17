const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  name: String,
  email: String,
  rol: String,
  password: String
});

module.exports = mongoose.model('tasks', TaskSchema);