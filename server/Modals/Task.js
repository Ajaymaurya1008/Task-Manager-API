const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The field name cannot be empty! Please provide a name"],
    trim: true,
    maxlength: [40, "Name cannot be bigger than 20 characters"],
  },
  details: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TaskModel = mongoose.model("tasks", TaskSchema);
module.exports = TaskModel;
