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
router.get('/tasks', taskController.getTasks);


router.get('/', (req, res) => {
  res.json({ mensagem: 'API de Gestão de Tarefas' });
});

module.exports = router;
