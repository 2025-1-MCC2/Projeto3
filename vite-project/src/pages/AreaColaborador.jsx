import {Link} from 'react-router-dom'
import { BotaoHeader } from '../components/Styles'

export default function AreaColaborador() {
    return ( <>
        <div style={{
            margin: "3% 3%",
            padding: "1% 3%",
            backgroundColor: "#f0f0f0",
            borderRadius: "15px",

        }}>
            <h1>Área do Colaborador</h1>
            <p>Bem-vindo à área do colaborador!<br></br> Clique nos botões abaixo para visualizar outras páginas.</p>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                margin: "3% 0",
                gap: "15px",
            }}>
                <Link to="/dashboard">
                    <BotaoHeader>Dashboard</BotaoHeader>
                </Link>
                <Link to="/eventos">
                    <BotaoHeader>Eventos</BotaoHeader>
                </Link>
                <Link to="/participacoes">
                    <BotaoHeader>Participações</BotaoHeader>
                </Link>
                <Link to="/relatorio">
                    <BotaoHeader>Relatórios</BotaoHeader>
                </Link>
                <Link to="/kpi">
                    <BotaoHeader>Medidores KPI</BotaoHeader>
                </Link>
            </div>
        </div>

    </>
);}