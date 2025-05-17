import React, { useState } from 'react'

export default function CadastroEvento({ onEventoAdicionado }) {
  const [nome, setNome] = useState('')
  const [dataEvento, setDataEvento] = useState('')
  const [participantes, setParticipantes] = useState('')
  const [colaboradores, setColaboradores] = useState('')
  const [local, setLocal] = useState('')
  const [fotoUrl, setFotoUrl] = useState('')
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErro('')
    setSucesso('')

    if (!nome || !dataEvento || !participantes || !colaboradores || !local) {
      setErro('Preencha todos os campos obrigatórios.')
      return
    }

    try {
      const res = await fetch('http://localhost:3000/api/eventos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nome,
            data: dataEvento,
            num_participantes: Number(participantes),
            colaboradores: Number(colaboradores),
            local_evento: local,
            foto_evento: fotoUrl || null
          })
          
      })

      if (!res.ok) {
        const msg = await res.text()
        throw new Error(msg || 'Erro ao salvar evento')
      }

      setSucesso('Evento cadastrado com sucesso!')
      setNome('')
      setDataEvento('')
      setParticipantes('')
      setColaboradores('')
      setLocal('')
      setFotoUrl('')

      if (onEventoAdicionado) onEventoAdicionado()
    } catch (err) {
      setErro(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Cadastrar Novo Evento</h2>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {sucesso && <p style={{ color: 'green' }}>{sucesso}</p>}

      <label>Nome do Evento*</label><br />
      <input
        type="text"
        value={nome}
        onChange={e => setNome(e.target.value)}
        required
      /><br /><br />

      <label>Data do Evento*</label><br />
      <input
        type="date"
        value={dataEvento}
        onChange={e => setDataEvento(e.target.value)}
        required
      /><br /><br />

      <label>Número de Participantes*</label><br />
      <input
        type="number"
        value={participantes}
        onChange={e => setParticipantes(e.target.value)}
        required
      /><br /><br />

      <label>Número de Colaboradores*</label><br />
      <input
        type="number"
        value={colaboradores}
        onChange={e => setColaboradores(e.target.value)}
        required
      /><br /><br />

      <label>Local*</label><br />
      <input
        type="text"
        value={local}
        onChange={e => setLocal(e.target.value)}
        required
      /><br /><br />

      <label>URL da Foto (opcional)</label><br />
      <input
        type="url"
        value={fotoUrl}
        onChange={e => setFotoUrl(e.target.value)}
        placeholder="https://exemplo.com/foto.jpg"
      /><br /><br />

      <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Salvar Evento
      </button>
    </form>
  )
}
