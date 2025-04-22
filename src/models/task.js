let tasks = [];

class Task {
  constructor({ title, description }) {
    this.id = tasks.length + 1;
    this.title = title;
    this.description = description;
    this.completed = false;
    this.createdAt = new Date();
  }

  static create(data) {
    const task = new Task(data);
    tasks.push(task);
    return task;
  }

  static getAll() {
    return tasks;
  }
}

module.exports = Task;
