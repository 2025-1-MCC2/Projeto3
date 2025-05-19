import React, { useState, useEffect } from 'react'
import { BotaoCadastro, BotaoHeader } from '../components/Styles'

export default function Kpi() {
  const [formData, setFormData] = useState({
    data_limite: '',
    descricao: '',
    valor: ''
  })
  const [message, setMessage] = useState('')
  const [kpis, setKpis] = useState([])
  const [mostrarKpis, setMostrarKpis] = useState(false)
  const [editandoId, setEditandoId] = useState(null)

  const fetchKpis = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/kpi')
      const data = await res.json()
      setKpis(data)
    } catch (error) {
      console.error('Erro ao buscar KPIs:', error)
    }
  }

  useEffect(() => {
    fetchKpis()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      ...formData,
      valor: parseFloat(formData.valor)
    }

    if (!formData.data_limite || !formData.descricao || formData.valor === '') {
      setMessage('Por favor, preencha todos os campos')
      return
    }

    try {
      const res = await fetch(`http://localhost:3000/api/kpi${editandoId ? `/${editandoId}` : ''}`, {
        method: editandoId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (res.ok) {
        setMessage(editandoId ? 'KPI atualizado com sucesso!' : 'KPI criado com sucesso!')
        setFormData({ data_limite: '', descricao: '', valor: '' })
        setEditandoId(null)
        fetchKpis()
      } else {
        setMessage('Erro ao salvar KPI')
      }
    } catch (error) {
      console.error('Erro:', error)
      setMessage('Erro ao salvar KPI')
    }
  }

  const handleMostrarKpis = () => setMostrarKpis(true)
  const handleFecharKpis = () => setMostrarKpis(false)

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este KPI?')) {
      try {
        await fetch(`http://localhost:3000/api/kpi/${id}`, { method: 'DELETE' })
        fetchKpis()
      } catch (error) {
        console.error('Erro ao deletar KPI:', error)
      }
    }
  }

  const handleEdit = (kpi) => {
    setFormData({
      data_limite: kpi.data_limite.split('T')[0],
      descricao: kpi.descricao,
      valor: kpi.valor
    })
    setEditandoId(kpi.id)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: 700, justifyContent: 'center', margin: '2% auto', padding: '20px', border: '1px solid #2c2c2c', borderRadius: '15px' }}>
      <h1>{editandoId ? 'Editar KPI' : 'Cadastro de KPI'}</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Data Limite:
          <input type="date" name="data_limite" value={formData.data_limite} onChange={handleChange} />
        </label>
        <label>
          Descrição:
          <input type="text" name="descricao" value={formData.descricao} onChange={handleChange} style={{ height: '200px' }} />
        </label>
        <label>
          Valor:
          <input type="number" name="valor" value={formData.valor} onChange={handleChange} />
        </label>
        <BotaoHeader type="submit" style={{ width: '50%' }}>
          {editandoId ? 'Salvar Edição' : 'Criar KPI'}
        </BotaoHeader>
      </form>
      {message && <p>{message}</p>}
      <BotaoHeader onClick={handleMostrarKpis} style={{ width: '50%' }}>Mostrar KPIs</BotaoHeader>
      {mostrarKpis && (
        <div>
          <h2>Lista de KPIs</h2>
          <ul>
            {kpis.map(kpi => (
              <li key={kpi.id}>
                <b>{kpi.descricao}</b> - {kpi.valor} (até {kpi.data_limite.split('T')[0]})
                <div style={{ marginTop: '5px' }}>
                  <button onClick={() => handleEdit(kpi)} style={{ marginRight: '10px' }}>Editar</button>
                  <button onClick={() => handleDelete(kpi.id)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
          <BotaoCadastro onClick={handleFecharKpis} style={{ width: '50%' }}>Fechar</BotaoCadastro>
        </div>
      )}
    </div>
  )
}
