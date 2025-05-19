import { Formulario, Input, BotaoHeader, Erro } from "../components/Styles";
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login(){
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [erro, setErro] = useState('')
    const navigate = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault()
        if(senha.trim() === '' || email.trim() === ''){
            setErro('Por favor, preencha todos os campos')
            return
        }
        setErro('')

        try {
            const res = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email: email, password: senha })
              })
            if(res.ok){
                const data = await res.json()
                localStorage.setItem('token', data.token)
                navigate('/areacolaborador')  // redireciona para a página de dashboard
            } else {
                const msg = await res.text()
                setErro(msg) // mostra erro na tela
            }
        } catch (error) {
            setErro('Erro de conexão. Tente novamente.')
        }
    }

    return (
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
                <div style={{
                    boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.39)',
                    background: 'white',
                    borderRadius: '15px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        color: 'white',
                        background: 'linear-gradient(90deg, #6432A1, #A148DD)',
                        padding: '30px',
                        textAlign: 'center'
                    }}>
                        <img src="imagens/logo/LogoTextoInstitutoBranco.png" alt="Instituto Criativo" width="252" height="42" />
                        <div className="auth-title">Faça seu login</div>
                    </div>

                    <Formulario onSubmit={handlesubmit}>
                        <Input 
                            type="email"
                            placeholder="Digite seu Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <Input 
                            type="password"  // aqui deve ser password
                            placeholder="Digite sua Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} 
                        />
                        {erro && <Erro>{erro}</Erro>}
                        <BotaoHeader type="submit">Entrar</BotaoHeader>
                        <Link to="/cadastro">
                            <p style={{textAlign : 'center'}}>Não tem conta? Faça o cadastro</p>
                        </Link>            
                    </Formulario>
                </div>
            </div>
        </section>
    )
}
