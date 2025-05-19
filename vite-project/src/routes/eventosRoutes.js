import express from 'express'
import db from '../db.js'

const router = express.Router()

// POST /eventos - Criar evento
router.post('/eventos', async (req, res) => {
  const { nome, data_evento, participante, colaborador, local_evento, foto_url } = req.body

  if (!nome || !data_evento || !participante || !colaborador || !local_evento) {
    return res.status(400).send('Campos obrigatórios faltando')
  }
  
  try {
    await db.execute(
      `INSERT INTO eventos (nome, data_evento, participante, colaborador, local_evento, foto_url)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [nome, data_evento, participante, colaborador, local_evento, foto_url]
    )
    res.status(201).send('Evento criado com sucesso')
  } catch (error) {
    console.error('Erro ao inserir evento:', error)
    res.status(500).send(`Erro interno ao criar evento: ${error.message}`)
  }
})

// GET /eventos - Listar eventos
router.get('/eventos', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM eventos ORDER BY data_evento DESC')
    res.json(rows)
  } catch (error) {
    console.error('Erro ao buscar eventos:', error)
    res.status(500).send('Erro interno ao buscar eventos')
  }
})

// PUT /eventos/:id - Atualizar evento pelo id
router.put('/eventos/:id', async (req, res) => {
  const { id } = req.params
  const { nome, data_evento, participante, colaborador, local_evento, foto_url } = req.body

  if (!nome || !data_evento || !participante || !colaborador || !local_evento) {
    return res.status(400).send('Campos obrigatórios faltando')
  }

  try {
    const [result] = await db.execute(
      `UPDATE eventos SET nome = ?, data_evento = ?, participante = ?, colaborador = ?, local_evento = ?, foto_url = ?
       WHERE id = ?`,
      [nome, data_evento, participante, colaborador, local_evento, foto_url, id]
    )

    if (result.affectedRows === 0) {
      return res.status(404).send('Evento não encontrado')
    }

    res.send('Evento atualizado com sucesso')
  } catch (error) {
    console.error('Erro ao atualizar evento:', error)
    res.status(500).send(`Erro interno ao atualizar evento: ${error.message}`)
  }
})

// DELETE /eventos/:id - Deletar evento pelo id
router.delete('/eventos/:id', async (req, res) => {
  const { id } = req.params

  try {
    const [result] = await db.execute('DELETE FROM eventos WHERE id = ?', [id])

    if (result.affectedRows === 0) {
      return res.status(404).send('Evento não encontrado')
    }

    res.send('Evento deletado com sucesso')
  } catch (error) {
    console.error('Erro ao deletar evento:', error)
    res.status(500).send(`Erro interno ao deletar evento: ${error.message}`)
  }
})

export default router
