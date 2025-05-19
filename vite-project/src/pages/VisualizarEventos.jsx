import React, { useState, useEffect } from 'react'

export default function VisualizarEventos() {
  const [eventos, setEventos] = useState([])
  const [erro, setErro] = useState('')
  const [editandoId, setEditandoId] = useState(null)
  const [formData, setFormData] = useState({
    nome: '',
    data_evento: '',
    participante: '',
    colaborador: '',
    local_evento: '',
    foto_url: ''
  })

  // Função para carregar eventos
  async function carregarEventos() {
    try {
      const res = await fetch('http://localhost:3000/api/eventos')
      const data = await res.json()
      setEventos(data)
      setErro('')
    } catch (err) {
      setErro('Erro ao carregar eventos: ' + err.message)
    }
  }

  useEffect(() => {
    carregarEventos()
  }, [])

  // Ao clicar em editar, preenche o form
  function iniciarEdicao(evento) {
    setEditandoId(evento.id)
    setFormData({
      nome: evento.nome,
      data_evento: evento.data_evento.slice(0, 10),
      participante: evento.participante,
      colaborador: evento.colaborador,
      local_evento: evento.local_evento,
      foto_url: evento.foto_url || ''
    })
  }

  function cancelarEdicao() {
    setEditandoId(null)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Atualizar evento
  async function salvarEdicao() {
    try {
      const res = await fetch(`http://localhost:3000/api/eventos/${editandoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          participante: Number(formData.participante),
          colaborador: Number(formData.colaborador)
        })
      })
      if (!res.ok) {
        const msg = await res.text()
        throw new Error(msg || 'Erro ao atualizar evento')
      }

      alert('Evento atualizado com sucesso!')
      setEditandoId(null)
      carregarEventos()
    } catch (err) {
      alert(err.message)
    }
  }

  // Deletar evento
  async function deletarEvento(id) {
    if (!window.confirm('Tem certeza que deseja deletar este evento?')) return

    try {
      const res = await fetch(`http://localhost:3000/api/eventos/${id}`, {
        method: 'DELETE'
      })
      if (!res.ok) {
        const msg = await res.text()
        throw new Error(msg || 'Erro ao deletar evento')
      }

      alert('Evento deletado com sucesso!')
      carregarEventos()
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: '2% auto' }}>
      <h2>Eventos Cadastrados</h2>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {eventos.length === 0 ? (
        <p>Nenhum evento cadastrado ainda.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {eventos.map(evento => (
            <li
              key={evento.id}
              style={{
                padding: '10px',
                border: '1px solid #2c2c2c',
                borderRadius: '5px',
                marginBottom: '10px',
                width: '100%'
              }}
            >
              {editandoId === evento.id ? (
                <>
                  <input
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Nome do Evento"
                    style={{ width: '100%', marginBottom: 6 }}
                  />
                  <input
                    type="date"
                    name="data_evento"
                    value={formData.data_evento}
                    onChange={handleChange}
                    style={{ width: '100%', marginBottom: 6 }}
                  />
                  <input
                    type="number"
                    name="participante"
                    value={formData.participante}
                    onChange={handleChange}
                    placeholder="Participantes"
                    style={{ width: '100%', marginBottom: 6 }}
                  />
                  <input
                    type="number"
                    name="colaborador"
                    value={formData.colaborador}
                    onChange={handleChange}
                    placeholder="Colaboradores"
                    style={{ width: '100%', marginBottom: 6 }}
                  />
                  <input
                    name="local_evento"
                    value={formData.local_evento}
                    onChange={handleChange}
                    placeholder="Local do Evento"
                    style={{ width: '100%', marginBottom: 6 }}
                  />
                  <input
                    type="url"
                    name="foto_url"
                    value={formData.foto_url}
                    onChange={handleChange}
                    placeholder="URL da Foto (Opcional)"
                    style={{ width: '100%', marginBottom: 6 }}
                  />

                  <button onClick={salvarEdicao} style={{ marginRight: 8 }}>
                    Salvar
                  </button>
                  <button onClick={cancelarEdicao}>Cancelar</button>
                </>
              ) : (
                <>
                  <strong>{evento.nome}</strong><br />
                  Data: {new Date(evento.data_evento).toLocaleDateString()}<br />
                  Participantes: {evento.participante}<br />
                  Colaboradores: {evento.colaborador}<br />
                  Local: {evento.local_evento}<br />
                  {evento.foto_url && (
                    <img src={evento.foto_url} alt="Foto do evento" width="300" />
                  )}
                  <div style={{ marginTop: 8 }}>
                    <button onClick={() => iniciarEdicao(evento)} style={{ marginRight: 8 }}>
                      Editar
                    </button>
                    <button onClick={() => deletarEvento(evento.id)}>Deletar</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
