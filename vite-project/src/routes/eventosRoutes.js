import express from 'express'
import db from '../db.js'

const router = express.Router()

const { nome, data, num_participantes, colaboradores, local_evento, foto_evento } = req.body

if (!nome || !data || !num_participantes || !colaboradores || !local_evento) {
  return res.status(400).send('Campos obrigatórios faltando')
}

try {
  await db.execute(
    `INSERT INTO eventos (nome, data, num_participantes, colaboradores, local_evento, foto_evento)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [nome, data, num_participantes, colaboradores, local_evento, foto_evento]
  )
  res.status(201).send('Evento criado com sucesso')
} catch (error) {
  console.error('Erro ao inserir evento:', error)
  res.status(500).send('Erro interno ao criar evento')
}


router.get('/eventos', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM eventos ORDER BY data_evento DESC')
    res.json(rows)
  } catch (error) {
    console.error('Erro ao buscar eventos:', error)
    res.status(500).send('Erro interno ao buscar eventos')
  }
})

export default router
