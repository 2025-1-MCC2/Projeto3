import express from 'express'
import db from '../db.js'

const router = express.Router()

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

router.get('/eventos', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM eventos ORDER BY data DESC')
    res.json(rows)
  } catch (error) {
    console.error('Erro ao buscar eventos:', error)
    res.status(500).send('Erro interno ao buscar eventos')
  }
})

export default router
