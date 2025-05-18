import React, { useState } from 'react'
import CadastroEvento from './CriarEvento'
import VisualizarEventos from './VisualizarEventos'
import { BotaoBanner } from '../components/Styles'

export default function App() {
  const [mostrarVisualizacao, setMostrarVisualizacao] = useState(false)

  return (
    <div>
      <BotaoBanner onClick={() => setMostrarVisualizacao(!mostrarVisualizacao)} style={{ margin: '20px 0 0 20px', color: 'black' }}>
        {mostrarVisualizacao ? 'Voltar ao Cadastro' : 'Visualizar Eventos'}
      </BotaoBanner>

      {mostrarVisualizacao ? (
        <VisualizarEventos />
      ) : (
        <CadastroEvento />
      )}
    </div>
  )
}
