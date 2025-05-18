import React, { useState } from 'react'
import { BotaoHeader } from '../components/Styles'

export default function CadastroEvento({ onEventoAdicionado }) {
  const [nome, setNome] = useState('')
  const [dataEvento, setDataEvento] = useState('')
  const [participante, setParticipante] = useState('')
  const [colaborador, setColaborador] = useState('')
  const [local, setLocal] = useState('')
  const [fotoUrl, setFotoUrl] = useState('')
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErro('')
    setSucesso('')

    if (!nome || !dataEvento || !participante || !colaborador || !local) {
      setErro('Preencha todos os campos obrigatórios.')
      return
    }

    try {
      const res = await fetch('http://localhost:3000/api/eventos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          data_evento: dataEvento,
          participante: Number(participante),
          colaborador: Number(colaborador),
          local_evento: local,
          foto_url: fotoUrl || null  // corrigido aqui
        })
      })

      if (!res.ok) {
        const msg = await res.text()
        throw new Error(msg || 'Erro ao salvar evento')
      }

      setSucesso('Evento cadastrado com sucesso!')
      setNome('')
      setDataEvento('')
      setParticipante('')
      setColaborador('')
      setLocal('')
      setFotoUrl('')

      if (onEventoAdicionado) onEventoAdicionado()
    } catch (err) {
      setErro(err.message)
    }
  }
  

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: 400,
      justifyContent: 'center',
      margin: '2% auto',
      }}>
      <h2 style={{textAlign: 'center'}}>Cadastrar Novo Evento</h2>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {sucesso && <p style={{ color: 'green' }}>{sucesso}</p>}

      <label>Nome do Evento<span style={{color: 'red'}}>*</span></label><br />
      <input
        type="text"
        value={nome}
        onChange={e => setNome(e.target.value)}
        required
        style={{
          padding: '3px',
          border: '1px solid #2c2c2c',
          borderRadius: '5px',
          maxWidth: '100%',
          width: '100%',
        }}
      /><br /><br />

      <label>Data do Evento<span style={{color: 'red'}}>*</span></label><br />
      <input
        type="date"
        value={dataEvento}
        onChange={e => setDataEvento(e.target.value)}
        required
        style={{
          padding: '3px',
          border: '1px solid #2c2c2c',
          borderRadius: '5px',
          maxWidth: '100%',
          width: '100%',
        }}
      /><br /><br />

      <label>Número de Participantes<span style={{color: 'red'}}>*</span></label><br />
      <input
        type="number"
        value={participante}
        onChange={e => setParticipante(e.target.value)}
        required
        style={{
          padding: '3px',
          border: '1px solid #2c2c2c',
          borderRadius: '5px',
          maxWidth: '100%',
          width: '100%',
        }}
      /><br /><br />

      <label>Número de Colaboradores<span style={{color: 'red'}}>*</span></label><br />
      <input
        type="number"
        value={colaborador}
        onChange={e => setColaborador(e.target.value)}
        required
        style={{
          padding: '3px',
          border: '1px solid #2c2c2c',
          borderRadius: '5px',
          maxWidth: '100%',
          width: '100%',
        }}
      /><br /><br />

      <label>Local<span style={{color: 'red'}}>*</span></label><br />
      <input
        type="text"
        value={local}
        onChange={e => setLocal(e.target.value)}
        required
        style={{
          padding: '3px',
          border: '1px solid #2c2c2c',
          borderRadius: '5px',
          maxWidth: '100%',
          width: '100%',
        }}
      /><br /><br />

      <label>URL da Foto (Opcional)</label><br />
      <input
        type="url"
        value={fotoUrl}
        onChange={e => setFotoUrl(e.target.value)}
        placeholder="https://exemplo.com/foto.jpg"
        style={{
          padding: '3px',
          border: '1px solid #2c2c2c',
          borderRadius: '5px',
          maxWidth: '100%',
          width: '100%',
        }}
      /><br /><br />

      <BotaoHeader type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Salvar Evento
      </BotaoHeader>
    </form>
  )
}
