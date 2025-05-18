import React, { useState } from 'react'

export default function Relatorio() {
  const [formData, setFormData] = useState({
    data_relatorio: '',
    objetivo: '',
    progresso: '',
    observacao: '',
    id_evento: ''
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
      const res = await fetch('http://localhost:3000/api/relatorio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (res.ok) {
        setMessage('Relatório criado com sucesso!')
        setFormData({
          data_relatorio: '',
          objetivo: '',
          progresso: '',
          observacao: '',
          id_evento: ''
        })
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

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Cadastrar Relatório</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Data do Relatório:</label><br />
          <input
            type="date"
            name="data_relatorio"
            value={formData.data_relatorio}
            onChange={handleChange}
            required
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
          />
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>

      {message && <p style={{ marginTop: 10 }}>{message}</p>}

      <hr style={{ margin: '2rem 0' }} />

      <button onClick={toggleRelatorios}>
        {mostrarRelatorios ? 'Ocultar Relatórios Anteriores' : 'Ver Relatórios Anteriores'}
      </button>

      {mostrarRelatorios && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Relatórios Anteriores:</h3>
          {relatorios.length === 0 ? (
            <p>Nenhum relatório encontrado.</p>
          ) : (
            <ul>
              {relatorios.map((rel) => (
                <li key={rel.id}>
                  <strong>Data:</strong> {rel.data_relatorio} <br />
                  <strong>Objetivo:</strong> {rel.objetivo} <br />
                  <strong>Progresso:</strong> {rel.progresso}% <br />
                  <strong>Observação:</strong> {rel.observacao} <br />
                  <strong>ID Evento:</strong> {rel.id_evento}
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
