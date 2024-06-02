import mongoose from "mongoose"

const subTodoSchema = new mongoose.Schema({
  content: {
    type: string,
    required: true,
  },
  complete: {
    type: string,
    default: false,
  },
  createdBy: {
    type : mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
}, {timpestamps:true});

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);