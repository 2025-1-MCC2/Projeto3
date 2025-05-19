import express from 'express'
import db from '../db.js'  // ajuste o caminho conforme sua estrutura

const router = express.Router()

// Rota POST para criar um novo progresso
router.post('/progresso', async (req, res) => {
  console.log('Recebido no backend:', req.body) // para ajudar no debug

  const { id_relatorio, id_kpi, resultado, meta } = req.body

  // Validação básica dos campos obrigatórios
  if (
    id_relatorio === undefined ||
    id_kpi === undefined ||
    resultado === undefined ||
    meta === undefined
  ) {
    return res.status(400).send('Campos obrigatórios faltando')
  }

  try {
    await db.execute(
      `INSERT INTO progresso (id_relatorio, id_kpi, resultado, meta)
       VALUES (?, ?, ?, ?)`,
      [parseInt(id_relatorio), parseInt(id_kpi), parseFloat(resultado), parseFloat(meta)]
    )
    res.status(201).send('Progresso registrado com sucesso')
  } catch (error) {
    console.error('Erro ao registrar progresso:', error)
    res.status(500).send(error.message)
  }
})

// Rota GET para listar todos os progressos
router.get('/progresso', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM progresso')
    res.json(rows)
  } catch (error) {
    console.error('Erro ao buscar progresso:', error)
    res.status(500).send(error.message)
  }
})
// Rota PUT para atualizar um progresso pelo id
router.put('/progresso/:id', async (req, res) => {
  const { id } = req.params
  const { id_relatorio, id_kpi, resultado, meta } = req.body

  // Validação básica (pode adaptar para campos opcionais)
  if (
    id_relatorio === undefined ||
    id_kpi === undefined ||
    resultado === undefined ||
    meta === undefined
  ) {
    return res.status(400).send('Campos obrigatórios faltando')
  }

  try {
    const [result] = await db.execute(
      `UPDATE progresso 
       SET id_relatorio = ?, id_kpi = ?, resultado = ?, meta = ?
       WHERE id = ?`,
      [parseInt(id_relatorio), parseInt(id_kpi), parseFloat(resultado), parseFloat(meta), parseInt(id)]
    )

    if (result.affectedRows === 0) {
      return res.status(404).send('Progresso não encontrado')
    }

    res.send('Progresso atualizado com sucesso')
  } catch (error) {
    console.error('Erro ao atualizar progresso:', error)
    res.status(500).send(error.message)
  }
})
router.delete('/progresso/:id', async (req, res) => {
  const { id } = req.params

  try {
    const [result] = await db.execute(
      'DELETE FROM progresso WHERE id = ?',
      [parseInt(id)]
    )

    if (result.affectedRows === 0) {
      return res.status(404).send('Progresso não encontrado')
    }

    res.send('Progresso removido com sucesso')
  } catch (error) {
    console.error('Erro ao deletar progresso:', error)
    res.status(500).send(error.message)
  }
})
export default router
