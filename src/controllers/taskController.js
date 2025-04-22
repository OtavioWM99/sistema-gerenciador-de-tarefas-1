const Task = require('../models/task');

exports.createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'O título é obrigatório' });
  }

  const newTask = Task.create({ title, description });
  res.status(201).json(newTask);
};

exports.getTasks = (req, res) => {
  const tasks = Task.getAll(); // usando método do modelo
  res.status(200).json(tasks);
};
