document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
  
    const API_URL = '/api/tasks';
  
    // Pegar tarefas existentes
    async function fetchTasks() {
      try {
        const res = await fetch(API_URL);
        const tasks = await res.json();
        renderTasks(tasks);
      } catch (err) {
        console.error('Erro ao buscar tarefas:', err);
      }
    }
  
    // Renderizar tarefas na tela
    function renderTasks(tasks) {
        taskList.innerHTML = '';
        tasks.forEach(task => {
          const li = document.createElement('li');
          li.className = `list-group-item d-flex justify-content-between align-items-start flex-column ${task.completed ? 'list-group-item-success' : ''}`;
      
          // Formatando a data
          const creationDate = new Date(task.createdAt).toLocaleString('pt-BR', {
            dateStyle: 'short',
            timeStyle: 'short'
          });
      
          li.innerHTML = `
            <div class="w-100 mb-2">
              <strong>${task.title}</strong><br>
              <small>${task.description}</small><br>
              <small class="text-muted">Criada em: ${creationDate}</small>
            </div>
            <div class="w-100 d-flex justify-content-end">
              <button class="btn btn-sm btn-outline-success me-2" onclick="completeTask(${task.id})">✔</button>
              <button class="btn btn-sm btn-outline-danger" onclick="deleteTask(${task.id})">🗑</button>
            </div>
          `;
          taskList.appendChild(li);
        });
      }
    
  
    // Criar nova tarefa
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = document.getElementById('title').value.trim();
      const description = document.getElementById('description').value.trim();
  
      if (!title || !description) return;
  
      try {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, description })
        });
  
        form.reset();
        fetchTasks();
      } catch (err) {
        console.error('Erro ao criar tarefa:', err);
      }
    });
  
    // Excluir tarefa
    window.deleteTask = async (id) => {
      try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        fetchTasks();
      } catch (err) {
        console.error('Erro ao excluir tarefa:', err);
      }
    };
  
    // Marcar tarefa como concluída
    window.completeTask = async (id) => {
      try {
        await fetch(`${API_URL}/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ completed: true })
        });
        fetchTasks();
      } catch (err) {
        console.error('Erro ao concluir tarefa:', err);
      }
    };
  
    fetchTasks();
  });
  