const Task = require('../models/task');

exports.createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'O título é obrigatório' });
  }

  const newTask = Task.create({ title, description });
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
  
    const updated = Task.update(Number(id), { title, description });
  
    if (!updated) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  
    res.json(updated);
  };
  

exports.getTasks = (req, res) => {
  const tasks = Task.getAll(); // usando método do modelo
  res.status(200).json(tasks);
};
