import express from 'express'
import db from '../db.js'

const router = express.Router()

router.post('/relatorio', async (req, res) => {
  const {data_relatorio, objetivo, progresso, observacao, id_evento } = req.body

  if ( !data_relatorio || !objetivo || !progresso || !observacao || !id_evento) {
    return res.status(400).send('Campos obrigatórios faltando')
  }
  
  
  try {
    await db.execute(
      `INSERT INTO relatorio ( data_relatorio, objetivo, progresso, observacao, id_evento)
       VALUES (?, ?, ?, ?, ?)`,
      [ data_relatorio, objetivo, progresso, observacao, id_evento]
    )
    res.status(201).send('Relatório criado com sucesso')

  } catch (error) {
    console.error('Erro ao inserir relatorio:', error)
    res.status(500).send(error.stack)

  }
})
// Rota para buscar todos os relatórios
router.get('/relatorio', async (req, res) => {
    try {
      const [rows] = await db.execute('SELECT * FROM relatorio ORDER BY data_relatorio DESC')
      res.json(rows)
    } catch (error) {
      console.error('Erro ao buscar relatórios:', error)
      res.status(500).send('Erro no servidor')
    }
  })
  

export default router