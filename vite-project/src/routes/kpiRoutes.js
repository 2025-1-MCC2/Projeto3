import express from 'express'
import db from '../db.js'

const router = express.Router()

// CREATE
router.post('/kpi', async (req, res) => {
  const { data_limite, descricao, valor } = req.body
  if (!data_limite || !descricao || !valor) {
    return res.status(400).send('Campos obrigatórios faltando')
  }

  try {
    await db.execute(
      `INSERT INTO kpi (data_limite, descricao, valor) VALUES (?, ?, ?)`,
      [data_limite, descricao, valor]
    )
    res.status(201).send('KPI registrado com sucesso')
  } catch (error) {
    console.error('Erro ao registrar KPI:', error)
    res.status(500).send(error.stack)
  }
})

// READ
router.get('/kpi', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM kpi ORDER BY id DESC')
    res.json(rows)
  } catch (error) {
    console.error('Erro ao buscar KPI:', error)
    res.status(500).send('Erro no servidor')
  }
})

// DELETE
router.delete('/kpi/:id', async (req, res) => {
  const { id } = req.params
  try {
    await db.execute('DELETE FROM kpi WHERE id = ?', [id])
    res.send('KPI deletado com sucesso')
  } catch (error) {
    console.error('Erro ao deletar KPI:', error)
    res.status(500).send('Erro ao deletar KPI')
  }
})

// UPDATE
router.put('/kpi/:id', async (req, res) => {
  const { id } = req.params
  const { data_limite, descricao, valor } = req.body
  try {
    await db.execute(
      `UPDATE kpi SET data_limite = ?, descricao = ?, valor = ? WHERE id = ?`,
      [data_limite, descricao, valor, id]
    )
    res.send('KPI atualizado com sucesso')
  } catch (error) {
    console.error('Erro ao atualizar KPI:', error)
    res.status(500).send('Erro ao atualizar KPI')
  }
})

export default router
