
import express from 'express'
import db from '../db.js'

const router = express.Router()

router.post('/participacao', async (req, res) => {
  const {data_participacao, id_evento_participado, id_membro } = req.body

  if ( !data_participacao || !id_evento_participado|| !id_membro ) {
    return res.status(400).send('Campos obrigatórios faltando')
  }
  
  
  try {
    await db.execute(
      `INSERT INTO participacao ( data_participacao, id_evento_participado, id_membro)
       VALUES (?, ?, ?)`,
      [ data_participacao, id_evento_participado, id_membro]
    )
    res.status(201).send('participação registrada com sucesso')

  } catch (error) {
    console.error('Erro ao registrar participação:', error)
    res.status(500).send(error.stack)

  }
})
// Rota para buscar todos os relatórios
router.get('/participacao', async (req, res) => {
    try {
      const [rows] = await db.execute('SELECT * FROM participacao ORDER BY data_participacao DESC')
      res.json(rows)
    } catch (error) {
      console.error('Erro ao buscar participação:', error)
      res.status(500).send('Erro no servidor')
    }
  })
  

export default router
