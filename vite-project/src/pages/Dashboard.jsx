import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

export default function Dashboard() {
  const [eventos, setEventos] = useState([]);
  const [participacoes, setParticipacoes] = useState([]);
  const [relatorios, setRelatorios] = useState([]);
  const [kpis, setKpis] = useState([]);
  const [progressos, setProgressos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const [eventosRes, participacoesRes, relatoriosRes, kpisRes, progressosRes] = await Promise.all([
          fetch('http://localhost:3000/api/eventos'),
          fetch('http://localhost:3000/api/participacao'),
          fetch('http://localhost:3000/api/relatorio'),
          fetch('http://localhost:3000/api/kpi'),
          fetch('http://localhost:3000/api/progresso')
        ]);

        const eventosData = await eventosRes.json();
        const participacoesData = await participacoesRes.json();
        const relatoriosData = await relatoriosRes.json();
        const kpisData = await kpisRes.json();
        const progressosData = await progressosRes.json();

        setEventos(eventosData);
        setParticipacoes(participacoesData);
        setRelatorios(relatoriosData);
        setKpis(kpisData);
        setProgressos(progressosData);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
        setError('Falha ao carregar dados. Tente recarregar a página.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Cálculos para estatísticas
  const totalEventos = eventos.length;
  const totalParticipacoes = participacoes.length;
  const eventosRecentes = eventos
    .filter(e => new Date(e.data_evento) > new Date(new Date().setMonth(new Date().getMonth() - 3)))
    .sort((a, b) => new Date(b.data_evento) - new Date(a.data_evento))
    .slice(0, 5);

  // Preparar dados para gráficos
  const eventosPorMes = eventos.reduce((acc, evento) => {
    const mes = new Date(evento.data_evento).toLocaleString('default', { month: 'long' });
    acc[mes] = (acc[mes] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(eventosPorMes).map(([name, value]) => ({ name, value }));

  const kpiProgressData = kpis.map(kpi => {
    const progresso = progressos.find(p => p.id_kpi === kpi.id);
    return {
      name: kpi.descricao.slice(0, 20) + (kpi.descricao.length > 20 ? '...' : ''),
      meta: kpi.valor,
      resultado: progresso ? progresso.resultado : 0
    };
  });

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  if (loading) return <div className="loading">Carregando dashboard...</div>;
  if (error) return <div className="error">{error}</div>;

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
      <h1>Dashboard Instituto Criativo</h1>
      
      {/* Seção de Resumo */}
      <div>
        <div>
          <h3>Total de Eventos</h3>
          <p>{totalEventos}</p>
        </div>
        <div >
          <h3>Participações</h3>
          <p>{totalParticipacoes}</p>
        </div>
        <div>
          <h3>Relatórios</h3>
          <p>{relatorios.length}</p>
        </div>
        <div>
          <h3>KPIs Monitorados</h3>
          <p>{kpis.length}</p>
        </div>
      </div>

      {/* Gráficos */}
      <div>
        <div>
          <h3>Eventos por Mês</h3>
          <BarChart width={400} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" name="Eventos" />
          </BarChart>
        </div>

        <div>
          <h3>Progresso de KPIs</h3>
          <BarChart width={400} height={300} data={kpiProgressData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="meta" fill="#8884d8" name="Meta" />
            <Bar dataKey="resultado" fill="#82ca9d" name="Resultado" />
          </BarChart>
        </div>
      </div>

      {/* Seção de Eventos Recentes */}
      <div>
        <h2>Próximos/Últimos Eventos</h2>
        <div>
          {eventosRecentes.map(evento => (
            <div key={evento.id}>
              <h3>{evento.nome}</h3>
              <p><strong>Data:</strong> {new Date(evento.data_evento).toLocaleDateString()}</p>
              <p><strong>Local:</strong> {evento.local_evento}</p>
              <p><strong>Participantes:</strong> {evento.participante}</p>
              <p><strong>Colaboradores:</strong> {evento.colaborador}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Relatórios */}
      <div>
        <h2>Últimos Relatórios</h2>
        <div>
          {relatorios.slice(0, 3).map(relatorio => {
            const eventoRelacionado = eventos.find(e => e.id === relatorio.id_evento);
            return (
              <div key={relatorio.id}>
                <h3>Relatório #{relatorio.id}</h3>
                <p><strong>Data:</strong> {new Date(relatorio.data_relatorio).toLocaleDateString()}</p>
                {eventoRelacionado && <p><strong>Evento:</strong> {eventoRelacionado.nome}</p>}
                <p><strong>Progresso:</strong> {relatorio.progresso}%</p>
                <p><strong>Observações:</strong> {relatorio.observacao.slice(0, 100)}...</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}