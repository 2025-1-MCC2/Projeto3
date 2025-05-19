import React, { useState, useEffect } from 'react'

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
        <div>
            <h1>Cadastro de KPI</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Data Limite:
                    <input
                        type="date"
                        name="data_limite"
                        value={formData.data_limite}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Descrição:
                    <input
                        type="text"
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Valor:
                    <input
                        type="number"
                        name="valor"
                        value={formData.valor}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Criar KPI</button>
            </form>
            {message && <p>{message}</p>}
            <button onClick={handleMostrarKpis}>Mostrar KPIs</button>
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
                    <button onClick={handleFecharKpis}>Fechar</button>
                </div>
            )}
        </div>
    )}