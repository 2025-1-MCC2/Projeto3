import { Formulario, Input, Botao, Erro } from "../components/Styles";
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
    return(
        <>
        <div>
            <h1 style={{textAlign: 'center', marginTop: '2rem'}}>Login</h1>
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
            <Link to="/cadastro">
            <p style={{textAlign : 'center'}}>Ou faça o cadastro</p>
            </Link>
            <Botao type="submit">Enviar</Botao>            
        </Formulario>
        </>
    )
}