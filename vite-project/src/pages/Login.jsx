import { Formulario, Input, BotaoHeader, Erro } from "../components/Styles";
import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Login(){
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [erro, setErro] = useState('')
    const handlesubmit = (e)=>{
        e.preventDefault()
        if(senha.trim() === '' || email.trim() === ''){
            setErro('Por favor, preencha todos os campos')
            return
        }
        setErro('')
        alert(`Nome: ${senha}\nEmail:${email}`)
    }
    return(<>

    <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
        }}>
        <div style={{
            alignSelf: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '420px',
            padding: '20px'
            }}>
            <div style={{boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.39)',
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden'
                }}>
                <div style={{color: 'white', background: 'linear-gradient(90deg, #6432A1, #A148DD)', padding: '30px', textAlign: 'center'}}>
                    <img src="imagens/logo/LogoTextoInstitutoBranco.png" alt="Instituto Criativo" width="252" height="42"></img>
                    <div class="auth-title">Crie sua conta</div>
                </div>

                <Formulario onSubmit={handlesubmit}>
                    <Input 
                        type="email"
                        placeholder="Digite seu Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <Input 
                        type="text"
                        placeholder="Digite sua Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                    {erro && <Erro>{erro}</Erro>}
                    <BotaoHeader type="submit">Enviar</BotaoHeader>
                    <Link to="/cadastro">
                        <p style={{textAlign : 'center'}}>Não tem conta? Faça o cadastro</p>
                    </Link>            
                </Formulario>
            </div>
        </div>
    </section>

</>
    )
}