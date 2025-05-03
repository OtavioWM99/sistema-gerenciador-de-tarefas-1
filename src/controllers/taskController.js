const Task = require('../models/task');

exports.createTask = (req, res) => {
  const { title, description, deadline } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'O título é obrigatório' });
  }

  const newTask = Task.create({ title, description, deadline });
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, deadline } = req.body;

  const updated = Task.update(Number(id), { title, description, deadline });

  if (!updated) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  res.json(updated);
};

exports.getTasks = (req, res) => {
  const tasks = Task.getAll();
  res.status(200).json(tasks);
};

exports.deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const success = Task.delete(id);

  if (!success) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  res.status(204).send();
};

exports.completeTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = Task.complete(id);

  if (!task) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  res.json(task);
};
