import {Link} from 'react-router-dom'
import {BotaoHome} from '../components/Styles'



export default function Home() {
    return (<>
        <section>
        <div style={{
          backgroundImage:"url('./public/imagens/layout/CrecheFoto.png')",
          backgroundSize: 'Cover',
          backgroundPosition: 'center',
          padding: '150px 20px',
          color: 'white',
          textAlign: 'left',
          position: 'relative', 
        }}>
            <h1 style ={{fontSize: '48px'}}>Educação criativa <br/>e inovadora</h1>
            <p style ={{fontSize: '24px'}}>
              O Instituto Criativo é uma ONG que nasceu <br/>para transformar a vida das pessoas.</p>
            <Link to="/cadastro">
              <BotaoHome>Quero ser criativo</BotaoHome>
            </Link>
        </div></section>
        <div>
        <h1 style={{fontSize:'48px', color :'#FC4A45',textAlign: 'Center'}}> Impacto Social</h1>
        </div>
      <div style={{margin :'50px 0',display:'flex',flexDirection: 'row'}}>
        <section style = {{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              margin:'0 5%',
              maxWidth: '800px',
        }}>
            <div><span style={{ color:' #212121',fontSize: '52px',textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>100</span><span style={{color: '#60f7ff',fontSize: '52px',textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>+</span><br/><span style={{color: '#828282',fontSize: '26px',textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>Projetos Criativos</span></div>
            <div><span style={{ color:' #212121',fontSize: '52px',textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>2.500</span><span style={{color: '#60f7ff',fontSize: '52px',textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>+</span><br/><span style={{color: '#828282',fontSize: '26px',textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>Educadores e Pais Desenvolvidos</span></div>
            <div><span style={{ color:' #212121',fontSize: '52px',textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>20.000</span><span style={{color: '#60f7ff',fontSize: '52px',textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>+</span><br/><span style={{color: '#828282',fontSize: '26px',textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>Estudantes Impactados</span></div>
            <div><span style={{ color:' #212121',fontSize: '52px',textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>30.000</span><span style={{color: '#60f7ff',fontSize: '52px',textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}} >+</span><br/><span style={{color: '#828282',fontSize: '26px',textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>Pessoas Alcançadas</span></div>
        </section>
        <div style={{ maxWidth: '100%',boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '15px'}}><img src="./public/imagens/layout/FotoLucyEscrevendo.jpeg" style={{height :'100%',borderRadius: '15px',boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
        </div>

    </>
);}
