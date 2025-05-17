import express from 'express'
import bcrypt from 'bcryptjs'
import db from '../db.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    return res.status(400).send('Nome, email e senha são obrigatórios')
  }

  try {
    // Verifica se já existe usuário com esse nome ou email
    const [existingUser] = await db.execute(
      'SELECT * FROM membro WHERE nome = ? OR email = ?',
      [username, email]
    )
    if (existingUser.length > 0) return res.status(400).send('Usuário ou email já existe')

    // Hash da senha para segurança
    const hashedPassword = await bcrypt.hash(password, 10)

    // Insere na tabela nome, email e senha hashada
    await db.execute(
      'INSERT INTO membro (nome, email, senha) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    )

    res.status(201).send('Usuário cadastrado com sucesso')
  } catch (err) {
    console.error(err)
    res.status(500).send('Erro ao registrar usuário')
  }
})

router.post('/auth/login', async(req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).send('Email e senha são obrigatórios');
  }

  try {
      const [users] = await db.execute(
          'SELECT * FROM membro WHERE email = ?',
          [email]
      )
      const user = users[0]
      if (!user) return res.status(400).send('Usuário não encontrado')
      
      const valid = await bcrypt.compare(password, user.senha)
      if (!valid) return res.status(401).send('Senha incorreta')
      
      const token = jwt.sign(
          { id: user.id, username: user.nome },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
      )
      
      res.json({ token })
  } catch (err) {
      console.error(err)
      res.status(500).send('Erro ao fazer login')
  }
})
export default router
