document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('task-form');
  const taskList = document.getElementById('task-list');

  const API_URL = '/api/tasks';

  // Pegar tarefas existentes
  async function fetchTasks(status = 'todas') {
    try {
      const res = await fetch(`/api/tasks?status=${status}`);
      const tasks = await res.json();
      renderTasks(tasks);
    } catch (err) {
      console.error('Erro ao buscar tarefas:', err);
    }
  }  

  // Função para obter o filtro atual
  function getCurrentFilter() {
    return document.getElementById('filter').value;
  }

  // Alterar filtro
  window.handleFilterChange = () => {
    const status = getCurrentFilter();
    fetchTasks(status);
  };  

  // Renderizar tarefas na tela
  function renderTasks(tasks) {
    const activeList = document.getElementById('task-list');
    const completedList = document.getElementById('completed-task-list');
    activeList.innerHTML = '';
    completedList.innerHTML = '';
  
    const currentDate = new Date();
  
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = `list-group-item d-flex justify-content-between align-items-start flex-column`;
  
      const creationDate = new Date(task.createdAt).toLocaleString('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'short'
      });
  
      const deadlineText = task.deadline
        ? `<br><small class="text-danger">Prazo: ${new Date(task.deadline).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</small>`
        : '';
  
      li.innerHTML = `
        <div class="w-100 mb-2">
          <strong class="${task.completed ? 'text-decoration-line-through' : ''}">${task.title}</strong><br>
          <small class="${task.completed ? 'text-decoration-line-through' : ''}">${task.description}</small><br>
          <small class="text-muted">Criada em: ${creationDate}</small>
          ${deadlineText}
          ${task.updatedAt ? `<br><small class="text-muted">Editada em: ${new Date(task.updatedAt).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })}</small>` : ''}
        </div>
        <div class="w-100 d-flex justify-content-end">
          ${
            !task.completed
              ? `<button class="btn btn-sm btn-outline-success me-2" onclick="completeTask(${task.id})">✔</button>`
              : ''
          }
          <button class="btn btn-sm btn-outline-warning me-2" onclick="openEditModal(${task.id}, '${task.title}', '${task.description}', '${task.deadline || ''}')">✏️</button>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteTask(${task.id})">🗑</button>
        </div>
      `;
  
      // Verifica se a tarefa está em atraso
      const isOverdue = task.deadline && new Date(task.deadline) < currentDate && !task.completed;
  
      if (task.completed) {
        li.classList.add('completed-task');
        completedList.appendChild(li);
      } else if (isOverdue) {
        li.classList.add('overdue-task');  
        activeList.appendChild(li);
      } else {
        li.classList.add('pending-task');
        activeList.appendChild(li);
      }
    });
  }  

  // Criar nova tarefa
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const deadline = document.getElementById('deadline').value;

    if (!title || !description) return;

    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, deadline: deadline || null })
      });

      form.reset();
      fetchTasks(getCurrentFilter()); 
    } catch (err) {
      console.error('Erro ao criar tarefa:', err);
    }
  });

  // Abrir modal de edição
  window.openEditModal = (id, title, description, deadline) => {
    document.getElementById('edit-id').value = id;
    document.getElementById('edit-title').value = title;
    document.getElementById('edit-description').value = description;
    document.getElementById('edit-deadline').value = deadline || '';

    const modal = new bootstrap.Modal(document.getElementById('editTaskModal'));
    modal.show();
  };

  // Editar tarefa
  document.getElementById('edit-task-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('edit-id').value;
    const title = document.getElementById('edit-title').value.trim();
    const description = document.getElementById('edit-description').value.trim();
    const deadline = document.getElementById('edit-deadline').value;

    if (!title || !description) return;

    try {
      await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, deadline: deadline || null })
      });

      const modal = bootstrap.Modal.getInstance(document.getElementById('editTaskModal'));
      modal.hide();

      fetchTasks(getCurrentFilter());  
    } catch (err) {
      console.error('Erro ao editar tarefa:', err);
    }
  });

  let taskIdToDelete = null;

  // Excluir tarefa
  window.deleteTask = (id) => {
    taskIdToDelete = id;
    const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
    modal.show();
  };

  document.getElementById('confirm-delete-btn').addEventListener('click', async () => {
    if (!taskIdToDelete) return;

    try {
      await fetch(`${API_URL}/${taskIdToDelete}`, { method: 'DELETE' });
      const modal = bootstrap.Modal.getInstance(document.getElementById('confirmDeleteModal'));
      modal.hide();
      taskIdToDelete = null;
      fetchTasks(getCurrentFilter());  
    } catch (err) {
      console.error('Erro ao excluir tarefa:', err);
    }
  });

  // Marcar tarefa como concluída
  window.completeTask = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: true })
      });
      fetchTasks(getCurrentFilter());  
    } catch (err) {
      console.error('Erro ao concluir tarefa:', err);
    }
  };

  fetchTasks(getCurrentFilter());  
});
