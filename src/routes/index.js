const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retorna uma mensagem de boas-vindas
 *     responses:
 *       200:
 *         description: Mensagem de boas-vindas
 */
router.get('/', (req, res) => {
  res.json({ mensagem: 'API Sistema Gerenciador de Tarefas' });
});

module.exports = router;
