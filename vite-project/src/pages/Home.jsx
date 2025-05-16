import {Link} from 'react-router-dom'
import {BotaoBanner} from '../components/Styles'


export default function Home() {
    return (<>

        {/* --- Banner Principal --- */}
        <section style={{
          backgroundImage: "url('imagens/layout/CrecheFoto.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '150px 20px',
          color: 'white',
          textShadow: '3px 3px 5px rgba(0, 0, 0, 0.75)',
          textAlign: 'left',
          position: 'relative'
        }}>
        <div style={{position: 'relative', zIndex: '1', maxWidth: '600px'}}>
            <h1 style={{fontSize: '48px', margin: '0', lineHeight: '1.2'}}>Educação criativa e<br></br>inovadora</h1>
            <p style={{fontSize: '24px', margin: '10px 0 20px'}}>O Instituto Criativo é uma ONG que nasceu<br></br>para transformar a vida das pessoas.</p>
            <Link to="/cadastro">
              <BotaoBanner>Quero ser criativo</BotaoBanner>
            </Link>
        </div>
        </section>

        {/* --- Impactos Sociais --- */}
        <section style={{
          padding: '60px 20px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white'
        }}>
        <h1 style={{fontSize: '48px', color: '#FC4A45', margin: '0 0 20px', textAlign: 'center', width: '100%'}}>Impactos Sociais</h1>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', margin: '0 auto', maxWidth: '40%', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold', fontSize: '36px', lineHeight: '1.2'}}>
            <div><span>100</span><span style={{color: '#60f7ff'}}>+</span><br></br><span style={{color: '#828282', fontSize: '24px', fontWeight: 'normal'}}>Projetos Criativos</span></div>
            <div><span>2.500</span><span style={{color: '#60f7ff'}}>+</span><br></br><span style={{color: '#828282', fontSize: '24px', fontWeight: 'normal'}}>Educadores e Pais Desenvolvidos</span></div>
            <div><span>20.000</span><span style={{color: '#60f7ff'}}>+</span><br></br><span style={{color: '#828282', fontSize: '24px', fontWeight: 'normal'}}>Estudantes Impactados</span></div>
            <div><span>30.000</span><span style={{color: '#60f7ff'}}>+</span><br></br><span style={{color: '#828282', fontSize: '24px', fontWeight: 'normal'}}>Pessoas Alcançadas</span></div>
        </div>
        <div>
            <img src="imagens/layout/FotoLucyEscrevendo.jpeg" alt="Lucy escrevendo" style={{maxWidth: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
        </div>
        </section>

        {/* --- Carrossel --- */}
        <section style={{padding: '60px 20px', backgroundColor: '#f9f9f9'}}>
        <div style={{overflow: 'hidden', position: 'relative', maxWidth: '400px', margin: '0 auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
            <div style={{display: 'flex', transition: 'transform 0.5s ease-in-out'}}>
                <img src="imagens/eventos/evento-reuniao.png" alt="Evento 1" style={{width: '100%', height: 'auto', flexShrink: '0', borderRadius: '15px'}}></img>
                <img src="imagens/eventos/evento-balao.png" alt="Evento 2" style={{width: '100%', height: 'auto', flexShrink: '0', borderRadius: '15px'}}></img>
                <img src="imagens/eventos/evento-lucy-crianca.jpeg" alt="Evento 3" style={{width: '100%', height: 'auto', flexShrink: '0', borderRadius: '15px'}}></img>
            </div>
        </div>
        </section>

        {/* --- Eventos --- */}
        <h1 style={{padding: '60px 20px', fontSize: '36px', color:'#212121', textAlign: 'center', marginBottom: '40px'}}>Eventos Recentes</h1>
        <section style={{
          display: 'grid',
          justifyContent: 'space-between',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5%',
          maxWidth: '95%',
          margin: '0 auto'
          }}>
            <div>
                <img src="imagens/eventos/evento-reuniao.png" alt="Evento Reuniao" style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '15px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}></img>
                <p style={{fontSize: '24px', color: '#212121', margin: '10px 0'}}>Evento 1</p>
                <p style={{fontSize: '16px', color: '#828282'}}>Descrição Evento 1</p>
            </div>
            <div>
                <img src="imagens/eventos/evento-balao.png" alt="Evento Balao" style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '15px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}></img>
                <p style={{fontSize: '24px', color: '#212121', margin: '10px 0'}}>Evento 2</p>
                <p style={{fontSize: '16px', color: '#828282'}}>Descrição Evento 2</p>
            </div>
            <div>
                <img src="imagens/eventos/evento-lucy-crianca.jpeg" alt="Evento Lucy Crianca" style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '15px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}></img>
                <p style={{fontSize: '24px', color: '#212121', margin: '10px 0'}}>Evento 3</p>
                <p style={{fontSize: '16px', color: '#828282'}}>Descrição Evento 3</p>
            </div>
        </section>

        {/* --- Membros --- */}
        <section style={{padding: '60px 20px', backgroundColor: '#f9f9f9'}}>
        <h1 style={{fontSize: '36px', color:' #212121', textAlign: 'center', marginBottom: '40px'}}>Parceiros e Voluntários</h1>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '5%',
          maxWidth: '100%',
          margin: '0 auto'
        }}>
            <div>
                <img src="imagens/membros/lucy_mari.jpg" alt="Lucy Mari" style={{width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p style={{fontSize: '20px', color: '#212121', margin: '10px 0', textAlign: 'center'}}>Lucy Mari</p>
                <p style={{fontSize: '16px', color:' #828282', textAlign: 'center'}}>PlaceHolder 1</p>
            </div>
            <div>
                <img src="imagens/membros/rodrigo_assirati.jpg"alt="Rodrigo Assirati" style={{width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p style={{fontSize: '20px', color: '#212121', margin: '10px 0', textAlign: 'center'}}>Rodrigo Assirati</p>
                <p style={{fontSize: '16px', color:' #828282', textAlign: 'center'}}>PlaceHolder 2</p>
            </div>
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
            <div>
                <img src="imagens/membros/Deyse-Santana.jpeg" alt="Deyse Santana" style={{width: '100%', maxWidth: '250px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p style={{fontSize: '20px', color: '#212121', margin: '10px 0', textAlign: 'center'}}>Deyse Santana</p>
                <p style={{fontSize: '16px', color:' #828282', textAlign: 'center'}}>Analista Financeira</p>
            </div>
            <div>
                <img src="imagens/membros/joao_querlon.jpg" alt="Joao Querlon" style={{width: '100%', maxWidth: '250px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p style={{fontSize: '20px', color: '#212121', margin: '10px 0', textAlign: 'center'}}>Joao Querlon</p>
                <p style={{fontSize: '16px', color:' #828282', textAlign: 'center'}}>Conselheiro fiscal</p>
            </div>
            <div>
                <img src="imagens/membros/felipe_almeida.jpg" alt="Felipe Almeida" style={{width: '100%', maxWidth: '250px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p style={{fontSize: '20px', color: '#212121', margin: '10px 0', textAlign: 'center'}}>Felipe Almeida</p>
                <p style={{fontSize: '16px', color:' #828282', textAlign: 'center'}}>Designer</p>
            </div>
            <div>
                <img src="imagens/membros/joaquim_roberto.jpg" alt="Joaquim Roberto" style={{width: '100%', maxWidth: '250px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p style={{fontSize: '20px', color: '#212121', margin: '10px 0', textAlign: 'center'}}>Joaquim Roberto</p>
                <p style={{fontSize: '16px', color:' #828282', textAlign: 'center'}}>Conselheiro</p>
            </div>
            <div>
                <img src="imagens/membros/carlos_albertini.jpg" alt="Carlos E. Albertini" style={{width: '100%', maxWidth: '250px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p style={{fontSize: '20px', color: '#212121', margin: '10px 0', textAlign: 'center'}}>Carlos E. Albertini</p>
                <p style={{fontSize: '16px', color:' #828282', textAlign: 'center'}}>Psicoterapeuta</p>
            </div>
            <div>
                <img src="imagens/membros/marcos_brito.jpg" alt="Marcos Brito" style={{width: '100%', maxWidth: '250px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p style={{fontSize: '20px', color: '#212121', margin: '10px 0', textAlign: 'center'}}>Marcos Brito</p>
                <p style={{fontSize: '16px', color:' #828282', textAlign: 'center'}}>Gestor de conteúdo</p>
            </div>
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          maxWidth: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          margin: '0 auto'
        }}>
            <div><img src="imagens/membros/voluntario1.jpg" alt="voluntario1" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario2.jpg" alt="voluntario2" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario3.jpg" alt="voluntario3" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario4.jpg" alt="voluntario4" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario5.jpg" alt="voluntario5" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario6.jpg" alt="voluntario6" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario7.jpg" alt="voluntario7" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario8.jpg" alt="voluntario8" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario9.jpg" alt="voluntario9" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario10.jpg" alt="voluntario10" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario11.jpg" alt="voluntario11" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario12.jpg" alt="voluntario12" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario13.jpg" alt="voluntario13" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario14.jpg" alt="voluntario14" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario15.jpg" alt="voluntario15" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
            <div><img src="imagens/membros/voluntario16.jpg" alt="voluntario16" style={{width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
        </div>
        </section>

        {/* --- Marcas Parceiras --- */}
        <section style={{
          padding: '60px 20px',
          backgroundColor: 'white',
          textAlign: 'center'
        }}>
        <h1 style={{fontSize: '36px', color: '#212121', marginBottom: '20px'}}>Estamos conectados com grandes marcas</h1>
        <div style={{maxWidth: '100%', margin: '0 auto', overflow: 'hidden'}}>
            <img src="imagens/Marcas.png" alt="Marcas Parceiras"></img>
        </div>
        </section>
  </>
);}
