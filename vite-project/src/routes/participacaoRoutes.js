import express from 'express'
import db from '../db.js'

const router = express.Router()

// POST - Criar participação
router.post('/participacao', async (req, res) => {
  const { data_participacao, id_evento_participado, id_membro } = req.body

  if (!data_participacao || !id_evento_participado || !id_membro) {
    return res.status(400).send('Campos obrigatórios faltando')
  }

  try {
    await db.execute(
      `INSERT INTO participacao (data_participacao, id_evento_participado, id_membro)
       VALUES (?, ?, ?)`,
      [data_participacao, id_evento_participado, id_membro]
    )
    res.status(201).send('Participação registrada com sucesso')
  } catch (error) {
    console.error('Erro ao registrar participação:', error)
    res.status(500).send(error.stack)
  }
})

// GET - Buscar todas as participações
router.get('/participacao', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM participacao ORDER BY data_participacao DESC')
    res.json(rows)
  } catch (error) {
    console.error('Erro ao buscar participação:', error)
    res.status(500).send('Erro no servidor')
  }
})

// PUT - Atualizar uma participação
router.put('/participacao/:id', async (req, res) => {
  const { id } = req.params
  const { data_participacao, id_evento_participado, id_membro } = req.body

  try {
    await db.execute(
      `UPDATE participacao
       SET data_participacao = ?, id_evento_participado = ?, id_membro = ?
       WHERE id = ?`,
      [data_participacao, id_evento_participado, id_membro, id]
    )
    res.status(200).send('Participação atualizada com sucesso')
  } catch (error) {
    console.error('Erro ao atualizar participação:', error)
    res.status(500).send('Erro no servidor')
  }
})

// DELETE - Remover uma participação
router.delete('/participacao/:id', async (req, res) => {
  const { id } = req.params

  try {
    await db.execute('DELETE FROM participacao WHERE id = ?', [id])
    res.status(200).send('Participação removida com sucesso')
  } catch (error) {
    console.error('Erro ao deletar participação:', error)
    res.status(500).send('Erro no servidor')
  }
})

export default router
