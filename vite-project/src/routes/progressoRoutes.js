import express from 'express'
import db from '../db.js'

const router = express.Router()

router.post('/progresso', async (req, res) => {
  const {data_limite, descricao, valor } = req.body

  if ( !data_limite || !descricao || !valor ) {
    return res.status(400).send('Campos obrigatórios faltando')
  }
  
  
  try {
    await db.execute(
      `INSERT INTO progresso ( data_limite, descricao, valor)
       VALUES (?, ?, ?)`,
      [ data_limite, descricao, valor]
    )
    res.status(201).send('progresso registrado com sucesso')

  } catch (error) {
    console.error('Erro ao registrar progresso:', error)
    res.status(500).send(error.stack)

  }
})
// Rota para buscar todos os relatórios
router.get('/progresso', async (req, res) => {
    try {
      const [rows] = await db.execute('SELECT * FROM kpi ORDER BY id DESC')
      res.json(rows)
    } catch (error) {
      console.error('Erro ao buscar kpi:', error)
      res.status(500).send('Erro no servidor')
    }
  })
  

export default router