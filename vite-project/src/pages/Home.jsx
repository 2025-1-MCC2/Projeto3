import {Link} from 'react-router-dom'
import {BotaoHome} from '../components/Styles'



export default function Home() {
    return (<>

        {/* --- Banner Principal --- */}
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
        </div>
        </section>

        {/* --- Impactos Sociais --- */}
        <div>
          <h1 style={{padding: '60px 20px', fontSize:'48px', color :'#FC4A45', textAlign: 'Center'}}> Impacto Social</h1>
        </div>
        <div style={{margin :'50px 0', display:'flex', flexDirection: 'row'}}>
        <section style = {{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '40px',
              margin:'0 5%',
              maxWidth: '800px',
        }}>
            <div><span style={{ color:'#212121', fontSize: '52px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>100</span><span style={{color: '#60f7ff', fontSize: '52px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>+</span><br/><span style={{color: '#828282', fontSize: '26px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>Projetos Criativos</span></div>
            <div><span style={{ color:'#212121', fontSize: '52px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>2.500</span><span style={{color: '#60f7ff', fontSize: '52px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>+</span><br/><span style={{color: '#828282', fontSize: '26px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>Educadores e Pais Desenvolvidos</span></div>
            <div><span style={{ color:'#212121', fontSize: '52px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>20.000</span><span style={{color: '#60f7ff', fontSize: '52px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>+</span><br/><span style={{color: '#828282', fontSize: '26px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>Estudantes Impactados</span></div>
            <div><span style={{ color:'#212121', fontSize: '52px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>30.000</span><span style={{color: '#60f7ff', fontSize: '52px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}} >+</span><br/><span style={{color: '#828282', fontSize: '26px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.527)', fontWeight: 'bold'}}>Pessoas Alcançadas</span></div>
        </section>
          <div style={{ maxWidth: '100%', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '15px'}}><img src="./public/imagens/layout/FotoLucyEscrevendo.jpeg" style={{height :'100%', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img></div>
        </div>

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
                <p class="membros1-nome">Lucy Mari</p>
                <p class="membros1-descricao">PlaceHolder 1</p>
            </div>
            <div>
                <img src="imagens/membros/rodrigo_assirati.jpg"alt="Rodrigo Assirati" style={{width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p class="membros1-nome">Rodrigo Assirati</p>
                <p class="membros1-descricao">PlaceHolder 2</p>
            </div>
        </div>
        <div class="membros-2fileira">
            <div>
                <img src="imagens/membros/Deyse-Santana.jpeg" alt="Deyse Santana" style={{width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p class="membros2-nome">Deyse Santana</p>
                <p class="membros2-descricao">Analista Financeira</p>
            </div>
            <div>
                <img src="imagens/membros/joao_querlon.jpg" alt="Joao Querlon" style={{width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p class="membros2-nome">Joao Querlon</p>
                <p class="membros2-descricao">Conselheiro fiscal</p>
            </div>
            <div>
                <img src="imagens/membros/felipe_almeida.jpg" alt="Felipe Almeida" style={{width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p class="membros2-nome">Felipe Almeida</p>
                <p class="membros2-descricao">Designer</p>
            </div>
            <div>
                <img src="imagens/membros/joaquim_roberto.jpg" alt="Joaquim Roberto" style={{width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p class="membros2-nome">Joaquim Roberto</p>
                <p class="membros2-descricao">Conselheiro</p>
            </div>
            <div>
                <img src="imagens/membros/carlos_albertini.jpg" alt="Carlos E. Albertini" style={{width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p class="membros2-nome">Carlos E. Albertini</p>
                <p class="membros2-descricao">Psicoterapeuta</p>
            </div>
            <div>
                <img src="imagens/membros/marcos_brito.jpg" alt="Marcos Brito" style={{width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <p class="membros2-nome">Marcos Brito</p>
                <p class="membros2-descricao">Gestor de conteúdo</p>
            </div>
        </div>
        <div class="membros-3fileira">
            <div><img src="imagens/membros/voluntario1.jpg" alt="voluntario1" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario2.jpg" alt="voluntario2" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario3.jpg" alt="voluntario3" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario4.jpg" alt="voluntario4" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario5.jpg" alt="voluntario5" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario6.jpg" alt="voluntario6" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario7.jpg" alt="voluntario7" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario8.jpg" alt="voluntario8" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario9.jpg" alt="voluntario9" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario10.jpg" alt="voluntario10" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario11.jpg" alt="voluntario11" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario12.jpg" alt="voluntario12" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario13.jpg" alt="voluntario13" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario14.jpg" alt="voluntario14" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario15.jpg" alt="voluntario15" width="50" height="50"></img></div>
            <div><img src="imagens/membros/voluntario16.jpg" alt="voluntario16" width="50" height="50"></img></div>
        </div>
        </section>
  </>
);}
