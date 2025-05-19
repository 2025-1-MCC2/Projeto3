import React, { useState } from 'react'
import { BotaoHeader } from '../components/Styles'

export default function Relatorio() {
  const [formData, setFormData] = useState({
    data_relatorio: '',
    objetivo: '',
    progresso: '',
    observacao: '',
    id_evento: '',
    id: undefined // usado para edição
  })

  const [message, setMessage] = useState('')
  const [relatorios, setRelatorios] = useState([])
  const [mostrarRelatorios, setMostrarRelatorios] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      !formData.data_relatorio ||
      !formData.objetivo ||
      formData.progresso === '' ||
      !formData.observacao ||
      !formData.id_evento
    ) {
      setMessage('Por favor, preencha todos os campos')
      return
    }

    const payload = {
      ...formData,
      progresso: parseFloat(formData.progresso),
      id_evento: parseInt(formData.id_evento)
    }

    try {
      const res = await fetch(
        `http://localhost:3000/api/relatorio${formData.id ? '/' + formData.id : ''}`,
        {
          method: formData.id ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      )

      if (res.ok) {
        setMessage(formData.id ? 'Relatório atualizado com sucesso!' : 'Relatório criado com sucesso!')
        setFormData({
          data_relatorio: '',
          objetivo: '',
          progresso: '',
          observacao: '',
          id_evento: '',
          id: undefined
        })
        buscarRelatorios()
      } else {
        const text = await res.text()
        console.error('Erro no servidor:', text)
        setMessage(`Erro: ${text}`)
      }
    } catch (error) {
      setMessage(`Erro na requisição: ${error.message}`)
    }
  }

  const buscarRelatorios = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/relatorio')
      if (res.ok) {
        const data = await res.json()
        setRelatorios(data)
        setMostrarRelatorios(true)
      } else {
        console.error('Erro ao buscar relatórios')
      }
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }

  const toggleRelatorios = () => {
    if (!mostrarRelatorios) {
      buscarRelatorios()
    } else {
      setMostrarRelatorios(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/relatorio/${id}`, {
        method: 'DELETE'
      })
      if (res.ok) {
        setMessage('Relatório excluído com sucesso!')
        buscarRelatorios()
      } else {
        setMessage('Erro ao excluir relatório')
      }
    } catch (error) {
      setMessage(`Erro: ${error.message}`)
    }
  }

  const handleEdit = (relatorio) => {
    setFormData({
      data_relatorio: relatorio.data_relatorio.slice(0, 10),
      objetivo: relatorio.objetivo,
      progresso: relatorio.progresso,
      observacao: relatorio.observacao,
      id_evento: relatorio.id_evento,
      id: relatorio.id
    })
    setMessage('Editando relatório')
  }

  return (
    <div 
      style={{
        maxWidth: 400,
        justifyContent: 'center',
        margin: '2% auto',
        padding: '20px',
        border: '1px solid #2c2c2c',
        borderRadius: '15px',
      }}>
      <h2>{formData.id ? 'Editar Relatório' : 'Cadastrar Relatório'}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Data do Relatório:</label><br />
          <input
            type="date"
            name="data_relatorio"
            value={formData.data_relatorio}
            onChange={handleChange}
            required
            style={{
              padding: '4px 0 4px 4px',
              border: '1px solid #2c2c2c',
              borderRadius: '5px',
              width: '100%',
            }}
          />
        </div>
        <div>
          <label>Objetivo:</label><br />
          <textarea
            name="objetivo"
            rows={4}
            value={formData.objetivo}
            onChange={handleChange}
            required
            style={{
              padding: '4px 0 4px 4px',
              border: '1px solid #2c2c2c',
              borderRadius: '5px',
              width: '100%',
              resize: 'none'
            }}
          />
        </div>
        <div>
          <label>Progresso (0 a 100):</label><br />
          <input
            type="number"
            name="progresso"
            min="0"
            max="100"
            step="0.01"
            value={formData.progresso}
            onChange={handleChange}
            required
            style={{
              padding: '4px 0 4px 4px',
              border: '1px solid #2c2c2c',
              borderRadius: '5px',
              width: '100%',
            }}
          />
        </div>
        <div>
          <label>Observação:</label><br />
          <textarea
            name="observacao"
            rows={4}
            value={formData.observacao}
            onChange={handleChange}
            required
            style={{
              padding: '4px 0 4px 4px',
              border: '1px solid #2c2c2c',
              borderRadius: '5px',
              width: '100%',
              resize: 'none'
            }}
          />
        </div>
        <div>
          <label>ID do Evento:</label><br />
          <input
            type="number"
            name="id_evento"
            value={formData.id_evento}
            onChange={handleChange}
            required
            style={{
              padding: '4px 0 4px 4px',
              border: '1px solid #2c2c2c',
              borderRadius: '5px',
              width: '100%',
            }}
          />
        </div>
        <br />
        <BotaoHeader type="submit">{formData.id ? 'Atualizar' : 'Enviar'}</BotaoHeader>
      </form>

      {message && <p style={{ marginTop: 10 }}>{message}</p>}

      <hr style={{ margin: '2rem 0' }} />

      <BotaoHeader onClick={toggleRelatorios}>
        {mostrarRelatorios ? 'Ocultar Relatórios Anteriores' : 'Ver Relatórios Anteriores'}
      </BotaoHeader>

      {mostrarRelatorios && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Relatórios Anteriores:</h3>
          {relatorios.length === 0 ? (
            <p>Nenhum relatório encontrado.</p>
          ) : (
            <ul>
              {relatorios.map((rel) => (
                <li key={rel.id} style={{ marginBottom: '1rem' }}>
                  <strong>Data:</strong> {rel.data_relatorio} <br />
                  <strong>Objetivo:</strong> {rel.objetivo} <br />
                  <strong>Progresso:</strong> {rel.progresso}% <br />
                  <strong>Observação:</strong> {rel.observacao} <br />
                  <strong>ID Evento:</strong> {rel.id_evento}
                  <br />
                  <button onClick={() => handleEdit(rel)} style={{ marginRight: 10 }}>Editar</button>
                  <button onClick={() => handleDelete(rel.id)}>Excluir</button>
                  <hr />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
