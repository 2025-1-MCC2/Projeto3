import React, { useState } from 'react'
import CadastroEvento from './CriarEvento'
import VisualizarEventos from './VisualizarEventos'

export default function App() {
  const [mostrarVisualizacao, setMostrarVisualizacao] = useState(false)

  return (
    <div>
      <button onClick={() => setMostrarVisualizacao(!mostrarVisualizacao)} style={{ margin: 20 }}>
        {mostrarVisualizacao ? 'Voltar ao Cadastro' : 'Visualizar Eventos'}
      </button>

      {mostrarVisualizacao ? (
        <VisualizarEventos />
      ) : (
        <CadastroEvento />
      )}
    </div>
  )
}
