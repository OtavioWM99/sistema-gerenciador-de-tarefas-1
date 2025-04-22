let tasks = [];

class Task {
  constructor({ title, description }) {
    this.id = tasks.length + 1;
    this.title = title;
    this.description = description;
    this.completed = false;
    this.createdAt = new Date();
    this.updatedAt = null; 
  }

  static create(data) {
    const task = new Task(data);
    tasks.push(task);
    return task;
  }

  static getAll() {
    return tasks;
  }

  static update(id, { title, description }) {
    const task = tasks.find(t => t.id === id);
    if (!task) return null;

    task.title = title;
    task.description = description;
    task.updatedAt = new Date(); // <- atualiza quando editado
    return task;
  }

  static delete(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
  }

  static complete(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return null;

    task.completed = true;
    return task;
  }
}

module.exports = Task;
