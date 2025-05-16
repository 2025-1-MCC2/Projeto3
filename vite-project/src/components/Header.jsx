import {Link} from 'react-router-dom'
import {Botao, Botao2, Botao3} from './Styles';
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

        <a href="/">
            <img src="./public/imagens/logo/LogoTextoInstitutoBranco.png" alt="Instituto Criativo" width="252" height="42"></img>
        </a>
        <h1 style={{ margin: 0 }}></h1>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/sobre">
            <Botao href="/sobre">Sobre</Botao>
          </Link>
          <Link to="/blog">
          <Botao href ="/blog">Blog</Botao>
          </Link>  
          <Link to="/cadastro">
          <Botao2 href ="/cadastro">Cadastro</Botao2>
          </Link>
          <Link to="/login">
          <Botao3 href="/login">Login</Botao3>
          </Link>
        </nav>
      </header>
    );
  }