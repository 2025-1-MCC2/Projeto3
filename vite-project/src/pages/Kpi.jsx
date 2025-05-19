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
            !formData.data_limite ||
            !formData.descricao ||
            formData.valor === ''
        ) {
            setMessage('Por favor, preencha todos os campos')
            return
        }

        const payload = {
            ...formData,
            valor: parseFloat(formData.valor)
        }

        try {
            const res = await fetch('http://localhost:3000/api/kpi', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })

            if (res.ok) {
                setMessage('KPI criado com sucesso!')
                setFormData({
                    data_limite: '',
                    descricao: '',
                    valor: ''
                })
            } else {
                setMessage('Erro ao criar KPI')
            }
        } catch (error) {
            console.error('Erro ao criar KPI:', error)
            setMessage('Erro ao criar KPI')
        }
    }
    const handleMostrarKpis = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/kpi')
            const data = await res.json()
            setKpis(data)
            setMostrarKpis(true)
        } catch (error) {
            console.error('Erro ao buscar KPIs:', error)
        }
    }
    const handleFecharKpis = () => {
        setMostrarKpis(false)
    }
    useEffect(() => {
        const fetchKpis = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/kpi')
                const data = await res.json()
                setKpis(data)
            } catch (error) {
                console.error('Erro ao buscar KPIs:', error)
            }
        }
        fetchKpis()
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
            <h1>Cadastro de KPI</h1>
            <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            }}>
                <label>
                    Data Limite:
                    <input
                        type="date"
                        name="data_limite"
                        value={formData.data_limite}
                        onChange={handleChange}
                        style={{
                          padding: '4px 0 4px 4px',
                          border: '1px solid #2c2c2c',
                          borderRadius: '5px',
                          maxWidth: '100%',
                          width: '100%',
                        }}
                    />
                </label>
                <label>
                    Descrição:
                    <input
                        type="text"
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                        style={{
                          padding: '4px 0 4px 4px',
                          border: '1px solid #2c2c2c',
                          borderRadius: '5px',
                          maxWidth: '100%',
                          width: '100%',
                          height: '200px',
                        }}
                    />
                </label>
                <label>
                    Valor:
                    <input
                        type="number"
                        name="valor"
                        value={formData.valor}
                        onChange={handleChange}
                        style={{
                          padding: '4px 0 4px 4px',
                          border: '1px solid #2c2c2c',
                          borderRadius: '5px',
                          maxWidth: '100%',
                          width: '100%',
                        }}
                    />
                </label>
                <BotaoHeader type="submit" style={{width: '50%'}}>Criar KPI</BotaoHeader>
            </form>
            {message && <p>{message}</p>}
            <BotaoHeader onClick={handleMostrarKpis} style={{width: '50%'}}>Mostrar KPIs</BotaoHeader>
            {mostrarKpis && (
                <div>
                    <h2>Lista de KPIs</h2>
                    <ul>
                        {kpis.map(kpi => (
                            <li key={kpi.id}>
                                {kpi.descricao} - {kpi.valor} (até {kpi.data_limite})
                            </li>
                        ))}
                    </ul>
                    <BotaoCadastro onClick={handleFecharKpis} style={{width: '50%'}}>Fechar</BotaoCadastro>
                </div>
            )}
        </div>
    )}