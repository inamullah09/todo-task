import Todo from "../Models/Model.js";

const getTodos = async (_, res) => {
    try {
        const todos = await Todo.find({ completed: false });
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getCompleted = async (_, res) => {
    try {
        const todos = await Todo.find({ completed: true });
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const addTodo = async (req, res) => {
    const todo = req.body;
    const newTodo = new Todo({
        ...todo,
        completed: false
    });
    try {
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const completeTodo = async (req, res) => {
    const { id } = req.body;
    try {
        const todo = await Todo.findById(id);
        todo.completed = !todo.completed;
        await todo.save();
        res.status(200).json(todo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export { getTodos, addTodo, completeTodo, getCompleted };