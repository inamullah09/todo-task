import mongoose, {mongo} from "mongoose";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;