import {Link} from 'react-router-dom'
import {BotaoHeader, BotaoCadastro, BotaoLogin} from './Styles';
export default function Header() {
    return (
      <header style={{
        background: 'linear-gradient(90deg, #6432A1, #A148DD)',
        color: 'white',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>

        <Link to="/">
            <img src="./imagens/logo/LogoTextoInstitutoBranco.png" alt="Instituto Criativo" width="252" height="42"></img>
        </Link>
        <h1 style={{ margin: 0 }}></h1>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/sobre">
            <BotaoHeader>Sobre</BotaoHeader>
          </Link>
          <Link to="/blog">
            <BotaoHeader>Blog</BotaoHeader>
          </Link>  
          <Link to="/cadastro">
            <BotaoCadastro>Cadastro</BotaoCadastro>
          </Link>
          <Link to="/login">
            <BotaoLogin>Login</BotaoLogin>
          </Link>
        </nav>
      </header>
    );
  }