import React, { useState, useEffect } from 'react'

export default function VisualizarEventos() {
  const [eventos, setEventos] = useState([])
  const [erro, setErro] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/api/eventos')
      .then(res => res.json())
      .then(data => setEventos(data))
      .catch(err => setErro('Erro ao carregar eventos: ' + err.message))
  }, [])

  return (
    <div style={{ maxWidth: 600, margin: '20px auto', fontFamily: 'Arial' }}>
      <h2>Eventos Cadastrados</h2>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {eventos.length === 0 ? (
        <p>Nenhum evento cadastrado ainda.</p>
      ) : (
        <ul>
          {eventos.map(evento => (
            <li key={evento.id}>
              <strong>{evento.nome}</strong><br />
              Data: {new Date(evento.data_evento).toLocaleDateString()}<br />
              Participantes: {evento.participante}<br />
              Colaboradores: {evento.colaborador}<br />
              Local: {evento.local_evento}<br />
              {evento.foto_url && (
                <img src={evento.foto_url} alt="Foto do evento" width="200" />
              )}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
