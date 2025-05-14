// src/components/Header.jsx
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
          <a href="/" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.26)',
            textDecoration: 'none',
            padding: '12px 24px',
            color: 'white',
            borderColor: 'white',
            borderBlockColor: 'white',
            borderRadius: '15px',
            transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
            fontSize: '14px',
            fontWeight: '500',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}>Home</a>
          <a href="/sobre" style={{ color: 'white', textDecoration: 'none' }}>Sobre</a>
        </nav>
      </header>
    );
  }