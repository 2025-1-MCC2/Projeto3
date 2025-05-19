import React, { useState, useEffect } from 'react';
import { BotaoHeader } from '../components/Styles';

export default function Progresso() {
    const [formData, setFormData] = useState({
        id_relatorio: '',
        id_kpi: '',
        resultado: '',
        meta: '',
        id: undefined // para editar
    });
    const [message, setMessage] = useState('');
    const [progresso, setProgresso] = useState([]);
    const [mostrarProgresso, setMostrarProgresso] = useState(false);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.id_relatorio ||
            !formData.id_kpi ||
            formData.resultado === '' ||
            formData.meta === ''
        ) {
            setMessage('Por favor, preencha todos os campos');
            return;
        }

        const payload = {
            id_relatorio: parseInt(formData.id_relatorio),
            id_kpi: parseInt(formData.id_kpi),
            resultado: parseFloat(formData.resultado),
            meta: parseFloat(formData.meta)
        };

        try {
            let res;
            if (formData.id) {
                // Atualizar
                res = await fetch(`http://localhost:3000/api/progresso/${formData.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
            } else {
                // Criar
                res = await fetch('http://localhost:3000/api/progresso', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
            }

            if (res.ok) {
                setMessage(formData.id ? 'Progresso atualizado com sucesso!' : 'Progresso criado com sucesso!');
                setFormData({
                    id_relatorio: '',
                    id_kpi: '',
                    resultado: '',
                    meta: '',
                    id: undefined
                });
                // Atualizar lista
                const res2 = await fetch('http://localhost:3000/api/progresso');
                const data = await res2.json();
                setProgresso(data);
                setMostrarProgresso(true);
            } else {
                setMessage(formData.id ? 'Erro ao atualizar progresso' : 'Erro ao criar progresso');
            }
        } catch (error) {
            console.error('Erro:', error);
            setMessage('Erro ao salvar progresso');
        }
    };

    const handleMostrarProgresso = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/progresso');
            const data = await res.json();
            setProgresso(data);
            setMostrarProgresso(true);
        } catch (error) {
            console.error('Erro ao buscar progresso:', error);
        }
    };

    const handleFecharProgresso = () => {
        setMostrarProgresso(false);
    };

    const handleDeletar = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/progresso/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                setMessage('Progresso deletado com sucesso');
                setProgresso(progresso.filter(item => item.id !== id));
            } else {
                setMessage('Erro ao deletar progresso');
            }
        } catch (error) {
            console.error('Erro ao deletar progresso:', error);
            setMessage('Erro ao deletar progresso');
        }
    };

    const handleEditar = (item) => {
        setFormData({
            id_relatorio: item.id_relatorio.toString(),
            id_kpi: item.id_kpi.toString(),
            resultado: item.resultado.toString(),
            meta: item.meta.toString(),
            id: item.id
        });
        setMessage('Editando progresso ID ' + item.id);
        setMostrarProgresso(false);
    };

    useEffect(() => {
        const fetchProgresso = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/progresso');
                const data = await res.json();
                setProgresso(data);
            } catch (error) {
                console.error('Erro ao buscar progresso:', error);
            }
        };
        fetchProgresso();
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 700,
            gap: '10px',
            justifyContent: 'center',
            margin: '2% auto',
            padding: '0 20px 20px 20px',
            border: '1px solid #2c2c2c',
            borderRadius: '15px',
        }}>
            <h1>Progresso</h1>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            }}>
                <input
                    type="text"
                    name="id_relatorio"
                    value={formData.id_relatorio}
                    onChange={handleChange}
                    placeholder="ID do Relatório"
                    style={{
                        padding: '4px 0 4px 4px',
                        border: '1px solid #2c2c2c',
                        borderRadius: '5px',
                        maxWidth: '100%',
                        width: '100%',
                    }}
                />
                <input
                    type="text"
                    name="id_kpi"
                    value={formData.id_kpi}
                    onChange={handleChange}
                    placeholder="ID do KPI"
                    style={{
                        padding: '4px 0 4px 4px',
                        border: '1px solid #2c2c2c',
                        borderRadius: '5px',
                        maxWidth: '100%',
                        width: '100%',
                    }}
                />
                <input
                    type="number"
                    name="resultado"
                    value={formData.resultado}
                    onChange={handleChange}
                    placeholder="Resultado"
                    style={{
                        padding: '4px 0 4px 4px',
                        border: '1px solid #2c2c2c',
                        borderRadius: '5px',
                        maxWidth: '100%',
                        width: '100%',
                    }}
                />
                <input
                    type="number"
                    name="meta"
                    value={formData.meta}
                    onChange={handleChange}
                    placeholder="Meta"
                    style={{
                        padding: '4px 0 4px 4px',
                        border: '1px solid #2c2c2c',
                        borderRadius: '5px',
                        maxWidth: '100%',
                        width: '100%',
                    }}
                />
                <BotaoHeader type="submit" style={{ maxWidth: '50%' }}>
                    {formData.id ? 'Atualizar Progresso' : 'Registrar Progresso'}
                </BotaoHeader>
            </form>
            {message && <p>{message}</p>}
            <BotaoHeader onClick={handleMostrarProgresso} style={{ maxWidth: '50%' }}>Mostrar Progresso</BotaoHeader>
            {mostrarProgresso && (
                <div>
                    <h2>Progresso</h2>
                    <button onClick={handleFecharProgresso}>Fechar</button>
                    <ul>
                        {progresso.map(item => (
                            <li key={item.id} style={{ marginBottom: '8px' }}>
                                ID Relatório: {item.id_relatorio}, ID KPI: {item.id_kpi}, Resultado: {item.resultado}, Meta: {item.meta}{' '}
                                <button onClick={() => handleEditar(item)}>Editar</button>{' '}
                                <button onClick={() => handleDeletar(item.id)}>Excluir</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
