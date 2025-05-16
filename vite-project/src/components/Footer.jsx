import {Link} from 'react-router-dom'
import {} from './Styles';

export default function Footer() {
    return (
        <footer style={{
        background: 'linear-gradient(90deg, #6432A1, #A148DD)',
        color: 'white',
        display: 'flexbox',
        maxWidth: '100%',
        margin: '0 auto',
        paddingBottom: '20px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        }}>

        <div style={{
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        gap: '40%',
        flexDirection: 'row',
        margin: '0 20px'
        }}>
            <div>
                <p style={{color:' #FFEA00', fontWeight: 'bold'}}>Contato</p>
                <p><i className="fas fa-phone-alt"></i> WhatsApp e telefone</p>
                <Link to="https://api.whatsapp.com/send?phone=5511910747492" style={{textDecoration: 'none', color: 'white'}}>
                    <i className="fab fa-whatsapp"></i> (11) 91074-7492
                </Link>
            </div>
            <div>
                <p>Links Rápidos</p>
                <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                    <p><i className="fas fa-home"></i> Home</p>
                </Link>
                <Link to="/sobre" style={{textDecoration: 'none', color: 'white'}}>
                    <p><i className="fas fa-info-circle"></i> Sobre</p>
                </Link>
                <Link to="/blog" style={{textDecoration: 'none', color: 'white'}}>
                    <p><i className="fas fa-blog"></i> Blog</p>
                </Link>
            </div>
        </div>
        <div style={{
        textAlign: 'center',
        justifyContent: 'center',
        margin: '0 20px'
        }}>
            <hr></hr><p>© 2025 Instituto Criativo. Todos os direitos reservados.</p>
        </div>
        </footer>
    );
  }
