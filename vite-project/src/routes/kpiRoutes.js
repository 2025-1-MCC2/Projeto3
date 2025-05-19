import express from 'express'
import db from '../db.js'

const router = express.Router()

router.post('/kpi', async (req, res) => {
  const {data_limite, descricao, valor } = req.body

  if ( !data_limite || !descricao || !valor ) {
    return res.status(400).send('Campos obrigatórios faltando')
  }
  
  
  try {
    await db.execute(
      `INSERT INTO kpi ( data_limite, descricao, valor)
       VALUES (?, ?, ?)`,
      [ data_limite, descricao, valor]
    )
    res.status(201).send('Kpi registrado com sucesso')

  } catch (error) {
    console.error('Erro ao registrar Kpi:', error)
    res.status(500).send(error.stack)

  }
})
// Rota para buscar todos os relatórios
router.get('/kpi', async (req, res) => {
    try {
      const [rows] = await db.execute('SELECT * FROM kpi ORDER BY id DESC')
      res.json(rows)
    } catch (error) {
      console.error('Erro ao buscar kpi:', error)
      res.status(500).send('Erro no servidor')
    }
  })
  

export default router