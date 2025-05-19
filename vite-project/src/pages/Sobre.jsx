export default function Sobre() {
    return (<>

      {/* --- Banner Principal --- */}
      <section style={{
        backgroundImage: "url('imagens/layout/MaoPintada.png')",
        textShadow: '3px 3px 5px rgb(0, 0, 0)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '150px 20px',
        color: 'white',
        textAlign: 'left',
        position: 'relative'
      }}>
        {/* Overlay escuro */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.33)',
      zIndex: 0
  }}></div>
        <div style={{position: 'relative', zIndex: '1', maxWidth: '600px'}}>
            <h1 style={{fontSize: '48px', margin: '0', lineHeight: '1.2'}}>Sobre</h1>
            <p style={{fontSize: '24px', margin: '10px 0 20px'}}>O Instituto Criativo é uma ONG que nasceu para transformar a vida das pessoas por meio da educação criativa e inovadora, empoderando-as de conhecimento de qualidade e diferenciado que são aplicados nos estudos, negócios e na própria vida contribuindo com a evolução da sociedade.</p>
        </div>
      </section>

      {/* --- Missão, Visão e Valores --- */}
      <section style={{padding: '60px 0px', backgroundColor: 'white', textAlign: 'center'}}>
        <div style={{display: 'grid', backgroundColor: '#dcccff', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', padding: '0 2%', margin: '0 0'}}>
            <div style={{maxWidth: 'fitContent', margin: '7% 10%', padding: '7%', backgroundColor: 'white', borderRadius: '15px'}}>
                <img src="imagens/logo/Missao.png" class="img" alt="" style={{width: '20%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <h1 style={{fontSize: '24px', color: '#212121', textAlign: 'center', marginBottom: '40px'}}>Missão</h1>
                <p style={{fontSize: '16px', color: '#828282'}}>Desenvolver e compartilhar projetos de educação criativa e inovadora que transformam a sociedade.</p>
            </div>
            <div style={{maxWidth: 'fitContent', margin: '7% 10%', padding: '7%', backgroundColor: 'white', borderRadius: '15px'}}>
                <img src="imagens/logo/Visao.png" class="img" alt="" style={{width: '20%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <h1 style={{fontSize: '24px', color: '#212121', textAlign: 'center', marginBottom: '40px'}}>Visão</h1>
                <p style={{fontSize: '16px', color: '#828282'}}>Ser referência na educação, empreendedorismo e eventos criativos por meio do aprendizado inovador.</p>
            </div>
            <div style={{maxWidth: 'fitContent', margin: '7% 10%', padding: '7%', backgroundColor: 'white', borderRadius: '15px'}}>
                <img src="imagens/logo/Valores.png" class="img" alt="" style={{width: '20%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img>
                <h1 style={{fontSize: '24px', color: '#212121', textAlign: 'center', marginBottom: '40px'}}>Valores</h1>
                <p style={{fontSize: '16px', color: '#828282'}}>Sustentabilidade<br></br>Qualidade efetiva<br></br>Criatividade e inovação<br></br>Ética, respeito e honestidade<br></br>Colaboração, comprometimento e união<br></br>Conhecimento e aprendizagem qualitativa</p>
            </div>
        </div>
      </section>

      {/* --- Segmentos --- */}
      <section style={{padding: '30px 5%', backgroundColor: 'white'}}>
            <h1 style={{fontSize: '36px', color: '#212121', textAlign: 'left', marginBottom: '40px', fontWeight: 'bold'}}>Conheça nossos segmentos</h1>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, minmax(500px, 1fr))', gap: '5%', margin: '5% 0'}}>
                <div style={{maxWidth: 'fit-content', margin: '0', padding: '0', backgroundColor: 'white', borderRadius: '15px'}}>
                    <img src="imagens/layout/Aprendizado.png" alt="" style={{width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img><br></br>
                    <img src="imagens/logo/IconeAprendizado.png" alt="" style={{width: '35px', height: 'auto'}}></img><br></br>
                    <p style={{fontSize: '22px', maxWidth: 'fit-content', color: 'white', backgroundColor: '#F45252', borderRadius: '15px', padding: '1% 2%', margin: '0'}}>Aprendizado</p>
                    <p style={{fontSize: '16px', margin: '1% 0', color: '#828282'}}>5 a 21 anos</p>
                    <p style={{fontSize: '22px', color: 'black', margin: '2% 0'}}>Projeto de incentivo ao raciocínio lógico de crianças para desenvolver seu pensamento crítico, empreendedorismo, matemática e computação.</p>
                </div>

                <div style={{maxWidth: 'fit-content', margin: '0', padding: '0', backgroundColor: 'white', borderRadius: '15px'}}>
                    <img src="imagens/layout/Emprego.png" alt="" style={{width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img><br></br>
                    <img src="imagens/logo/IconeEmprego.png" alt="" style={{width: '35px', height: 'auto'}}></img><br></br>
                    <p style={{fontSize: '22px', maxWidth: 'fit-content', color: 'white', backgroundColor: '#447FFF', borderRadius: '15px', padding: '1% 2%', margin: '0'}}>Primeiro Emprego</p>
                    <p style={{fontSize: '16px', margin: '1% 0', color: '#828282'}}>16 a 20 anos</p>
                    <p style={{fontSize: '22px', color: 'black', margin: '2% 0'}}>Jovens em busca do primeiro emprego, para fornecer competências e habilidades, desenvolvimento pessoal e conhecimentos necessários para ingressar no mercado de trabalho.</p>
                </div>
                
                <div style={{maxWidth: 'fit-content', margin: '0', padding: '0', backgroundColor: 'white', borderRadius: '15px'}}>
                    <img src="imagens/layout/Recolocacao.png" alt="" style={{width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img><br></br>
                    <img src="imagens/logo/IconeRecolocacao.png" alt="" style={{width: '35px', height: 'auto'}}></img><br></br>
                    <p style={{fontSize: '22px', maxWidth: 'fit-content', color: 'white', backgroundColor: '#EEB64D', borderRadius: '15px', padding: '1% 2%', margin: '0'}}>Recolocação</p>
                    <p style={{fontSize: '16px', margin: '1% 0', color: '#828282'}}>21 a 60 anos</p>
                    <p style={{fontSize: '22px', color: 'black', margin: '2% 0'}}>Projeto de incentivo ao raciocínio lógico de adultos para desenvolver seu pensamento crítico, empreendedorismo, matemática e computação.</p>
                </div>

                <div style={{maxWidth: 'fit-content', margin: '0', padding: '0', backgroundColor: 'white', borderRadius: '15px'}}>
                    <img src="imagens/layout/Bem-Estar.png" alt="" style={{width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}></img><br></br>
                    <img src="imagens/logo/IconeBem-Estar.png" alt="" style={{width: '35px', height: 'auto'}}></img><br></br>
                    <p style={{fontSize: '22px', maxWidth: 'fit-content', color: 'white', backgroundColor: '#4DC80C', borderRadius: '15px', padding: '1% 2%', margin: '0'}}>Bem-Estar</p>
                    <p style={{fontSize: '16px', margin: '1% 0', color: '#828282'}}>50+ anos</p>
                    <p style={{fontSize: '22px', color: 'black', margin: '2% 0'}}>Promovendo assistência para desenvolvimento social, por meio de atividades de conversação, terapias, doação de alimentos e palestras de reeducação da mente.</p>
                </div>
            </div>
      </section>
  </>
);} 