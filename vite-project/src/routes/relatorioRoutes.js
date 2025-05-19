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

  router.delete('/relatorio/:id', async (req, res) => {
    const { id } = req.params
  
    try {
      const [result] = await db.execute('DELETE FROM relatorio WHERE id = ?', [id])
  
      if (result.affectedRows === 0) {
        return res.status(404).send('Relatório não encontrado')
      }
  
      res.send('Relatório deletado com sucesso')
    } catch (error) {
      console.error('Erro ao deletar relatório:', error)
      res.status(500).send('Erro no servidor')
    }
  })
  router.delete('/relatorio/:id', async (req, res) => {
    const { id } = req.params
  
    try {
      const [result] = await db.execute('DELETE FROM relatorio WHERE id = ?', [id])
  
      if (result.affectedRows === 0) {
        return res.status(404).send('Relatório não encontrado')
      }
  
      res.send('Relatório deletado com sucesso')
    } catch (error) {
      console.error('Erro ao deletar relatório:', error)
      res.status(500).send('Erro no servidor')
    }
  })
  router.put('/relatorio/:id', async (req, res) => {
    const { id } = req.params
    const { data_relatorio, objetivo, progresso, observacao, id_evento } = req.body
  
    if (!data_relatorio || !objetivo || progresso === undefined || !observacao || !id_evento) {
      return res.status(400).send('Campos obrigatórios faltando')
    }
  
    try {
      const [result] = await db.execute(
        `UPDATE relatorio
         SET data_relatorio = ?, objetivo = ?, progresso = ?, observacao = ?, id_evento = ?
         WHERE id = ?`,
        [data_relatorio, objetivo, progresso, observacao, id_evento, id]
      )
  
      if (result.affectedRows === 0) {
        return res.status(404).send('Relatório não encontrado')
      }
  
      res.send('Relatório atualizado com sucesso')
    } catch (error) {
      console.error('Erro ao atualizar relatório:', error)
      res.status(500).send('Erro no servidor')
    }
  })
   



  export default router