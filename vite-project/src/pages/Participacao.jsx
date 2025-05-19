import React, { useState, useEffect } from 'react'
import { BotaoCadastro, BotaoHeader } from '../components/Styles'

export default function Participacao() {
  const [formData, setFormData] = useState({
    data_participacao: '',
    id_evento_participado: '',
    id_membro: ''
  })
  const [message, setMessage] = useState('')
  const [participacoes, setParticipacoes] = useState([])
  const [mostrarParticipacoes, setMostrarParticipacoes] = useState(false)
  const [editingId, setEditingId] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const fetchParticipacoes = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/participacao')
      const data = await res.json()
      setParticipacoes(data)
    } catch (error) {
      console.error('Erro ao buscar Participacoes:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const url = editingId
      ? `http://localhost:3000/api/participacao/${editingId}`
      : 'http://localhost:3000/api/participacao'

    const method = editingId ? 'PUT' : 'POST'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setMessage(editingId ? 'Participação atualizada!' : 'Participação registrada!')
        setFormData({ data_participacao: '', id_evento_participado: '', id_membro: '' })
        setEditingId(null)
        fetchParticipacoes()
      } else {
        setMessage('Erro ao salvar participação')
      }
    } catch (error) {
      console.error('Erro ao salvar participação:', error)
      setMessage('Erro ao salvar participação')
    }
  }

  const handleEditar = (participacao) => {
    setFormData({
      data_participacao: participacao.data_participacao.split('T')[0],
      id_evento_participado: participacao.id_evento_participado,
      id_membro: participacao.id_membro
    })
    setEditingId(participacao.id)
  }

  const handleDeletar = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir esta participação?')) return
    try {
      await fetch(`http://localhost:3000/api/participacao/${id}`, { method: 'DELETE' })
      fetchParticipacoes()
    } catch (error) {
      console.error('Erro ao deletar participação:', error)
    }
  }

  const handleMostrarParticipacoes = () => setMostrarParticipacoes(true)
  const handleFecharParticipacoes = () => setMostrarParticipacoes(false)

  useEffect(() => {
    fetchParticipacoes()
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: 700,
      justifyContent: 'center',
      margin: '2% auto',
      padding: '20px',
      border: '1px solid #2c2c2c',
      borderRadius: '15px',
    }}>
      <h1>{editingId ? 'Editar' : 'Cadastro de'} Participação</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Data da Participação:
          <input
            type="date"
            name="data_participacao"
            value={formData.data_participacao}
            onChange={handleChange}
          />
        </label>
        <label>
          ID do Evento Participado:
          <input
            type="number"
            name="id_evento_participado"
            value={formData.id_evento_participado}
            onChange={handleChange}
          />
        </label>
        <label>
          ID do Membro:
          <input
            type="number"
            name="id_membro"
            value={formData.id_membro}
            onChange={handleChange}
          />
        </label>
        <BotaoHeader type="submit" style={{ width: '50%' }}>
          {editingId ? 'Atualizar' : 'Registrar'} Participação
        </BotaoHeader>
      </form>

      {message && <p>{message}</p>}

      <BotaoHeader onClick={handleMostrarParticipacoes} style={{ width: '50%' }}>
        Mostrar Participações
      </BotaoHeader>

      {mostrarParticipacoes && (
        <div>
          <h2>Lista de Participações</h2>
          <ul>
            {participacoes.map(participacao => (
              <li key={participacao.id}>
                Membro #{participacao.id_membro} - Evento #{participacao.id_evento_participado} em {new Date(participacao.data_participacao).toLocaleDateString('pt-BR')}
                <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                  <BotaoCadastro onClick={() => handleEditar(participacao)}>Editar</BotaoCadastro>
                  <BotaoCadastro onClick={() => handleDeletar(participacao.id)}>Excluir</BotaoCadastro>
                </div>
              </li>
            ))}
          </ul>
          <BotaoCadastro onClick={handleFecharParticipacoes}>Fechar</BotaoCadastro>
        </div>
      )}
    </div>
  )
}
