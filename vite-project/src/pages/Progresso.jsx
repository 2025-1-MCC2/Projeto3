import React, { useState, useEffect } from 'react';

export default function Progresso() {
    const [formData, setFormData] = useState({
        id_relatorio: '',
        id_kpi: '',
        resultado: '',
        meta: ''
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

        console.log('Enviando payload:', payload); // Debug

        try {
            const res = await fetch('http://localhost:3000/api/progresso', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setMessage('Progresso criado com sucesso!');
                setFormData({
                    id_relatorio: '',
                    id_kpi: '',
                    resultado: '',
                    meta: ''
                });
            } else {
                setMessage('Erro ao criar progresso');
            }
        } catch (error) {
            console.error('Erro ao criar progresso:', error);
            setMessage('Erro ao criar progresso');
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
        <div>
            <h1>Progresso</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="id_relatorio"
                    value={formData.id_relatorio}
                    onChange={handleChange}
                    placeholder="ID do Relatório"
                />
                <input
                    type="text"
                    name="id_kpi"
                    value={formData.id_kpi}
                    onChange={handleChange}
                    placeholder="ID do KPI"
                />
                <input
                    type="number"
                    name="resultado"
                    value={formData.resultado}
                    onChange={handleChange}
                    placeholder="Resultado"
                />
                <input
                    type="number"
                    name="meta"
                    value={formData.meta}
                    onChange={handleChange}
                    placeholder="Meta"
                />
                <button type="submit">Registrar Progresso</button>
            </form>
            {message && <p>{message}</p>}
            <button onClick={handleMostrarProgresso}>Mostrar Progresso</button>
            {mostrarProgresso && (
                <div>
                    <h2>Progresso</h2>
                    <button onClick={handleFecharProgresso}>Fechar</button>
                    <ul>
                        {progresso.map(item => (
                            <li key={`${item.id_relatorio}-${item.id_kpi}`}>
                                ID Relatório: {item.id_relatorio}, ID KPI: {item.id_kpi}, Resultado: {item.resultado}, Meta: {item.meta}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
