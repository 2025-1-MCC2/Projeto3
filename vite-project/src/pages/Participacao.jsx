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
            !formData.data_participacao ||
            !formData.id_evento_participado ||
            !formData.id_membro
        ) {
            setMessage('Por favor, preencha todos os campos')
            return
        }

        const payload = {
            ...formData,
        }

        try {
            const res = await fetch('http://localhost:3000/api/participacao', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })

            if (res.ok) {
                setMessage('Participação registrada com sucesso!')
                setFormData({
                    data_participacao: '',
                    id_evento_participado: '',
                    id_membro: ''
                })
            } else {
                setMessage('Erro ao registrar participação')
            }
        } catch (error) {
            console.error('Erro ao registrar participação:', error)
            setMessage('Erro ao registrar participação')
        }
    }
    const handleMostrarParticipacoes = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/participacao')
            const data = await res.json()
            setParticipacoes(data)
            setMostrarParticipacoes(true)
        } catch (error) {
            console.error('Erro ao buscar Participações:', error)
        }
    }
    const handleFecharParticipacoes = () => {
        setMostrarParticipacoes(false)
    }
    useEffect(() => {
        const fetchParticipacoes = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/participacao')
                const data = await res.json()
                setParticipacoes(data)
            } catch (error) {
                console.error('Erro ao buscar Participacoes:', error)
            }
        }
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
            <h1>Cadastro de Participação</h1>
            <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            }}>
                <label>
                    Data da Participação:
                    <input
                        type="date"
                        name="data_participacao"
                        value={formData.data_participacao}
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
                    ID do Evento Participado:
                    <input
                        type="number"
                        name="id_evento_participado"
                        value={formData.id_evento_participado}
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
                    ID do Membro:
                    <input
                        type="number"
                        name="id_membro"
                        value={formData.id_membro}
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
                <BotaoHeader type="submit" style={{width: '50%'}}>Registrar Participação</BotaoHeader>
            </form>
            {message && <p>{message}</p>}
            <BotaoHeader onClick={handleMostrarParticipacoes} style={{width: '50%'}}>Mostrar Participações</BotaoHeader>
            {mostrarParticipacoes && (
                <div>
                    <h2>Lista de Participações</h2>
                    <ul>
                        {participacoes.map(participacoes=> (
                            <li participacoes={participacoes.id}>
                                {participacoes.id_membro} - {participacoes.id_evento_participado} (até {participacoes.data_participacao})
                            </li>
                        ))}
                    </ul>
                    <BotaoCadastro onClick={handleFecharParticipacoes}>Fechar</BotaoCadastro>
                </div>
            )}
        </div>
    )}