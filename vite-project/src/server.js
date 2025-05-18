import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes.js'
import eventosRoutes from './routes/eventosRoutes.js';
import relatorioRoutes from './routes/relatorioRoutes.js';

dotenv.config()
const app = express()
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true })) //permite envio por forms com action
app.use(express.static('public')) //Adicione isso para servir os HTMLs
app.use('/api', routes)
app.use('/api', eventosRoutes);
app.use('/api', relatorioRoutes);

app.listen(port, ()=>{
    console.log(`Servidor Rodando em: http://localhost:${port}`)
})

// cd vite-project/
// para rodar o back end: npx nodemon src/server.js
