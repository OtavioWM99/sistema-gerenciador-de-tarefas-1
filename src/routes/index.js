const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 */
router.post('/tasks', taskController.createTask);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Lista todas as tarefas
 *     responses:
 *       200:
 *         description: Lista de tarefas
 */
router.get('/tasks', taskController.getTasks);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retorna mensagem de boas-vindas da API
 *     responses:
 *       200:
 *         description: Mensagem informando que a API está ativa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: API de Gestão de Tarefas
 */
router.get('/', (req, res) => {
  res.json({ mensagem: 'Bem vindo a API de Gestão de Tarefas. Acesse http://localhost:3000/ para utilizá-la.' });
});

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualiza uma tarefa existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *       404:
 *         description: Tarefa não encontrada
 */
router.put('/tasks/:id', taskController.updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Exclui uma tarefa
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     responses:
 *       204:
 *         description: Tarefa excluída com sucesso
 *       404:
 *         description: Tarefa não encontrada
 */

router.delete('/tasks/:id', taskController.deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 *   patch:
 *     summary: Marca a tarefa como concluída
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     responses:
 *       200:
 *         description: Tarefa marcada como concluída
 *       404:
 *         description: Tarefa não encontrada
 */
router.patch('/tasks/:id', taskController.completeTask);

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/tarefas', (req, res) => {
  res.render('tarefas');
});


module.exports = router;
