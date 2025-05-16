import { Formulario, Input, Botao, Erro } from "../components/Styles";
import { useState } from 'react'


export default function Login(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [erro, setErro] = useState('')
    const handlesubmit = (e)=>{
        e.preventDefault()
        if(nome.trim() === '' || email.trim() === ''){
            setErro('Por favor, preencha todos os campos')
            return
        }
        setErro('')
        alert(`Nome: ${nome}\nEmail:${email}`)
    }
    return(
        <>
        <div>
            <h1 style={{textAlign: 'center', marginTop: '2rem'}}>Login</h1>
        </div>
        <Formulario onSubmit={handlesubmit}>
            <Input 
                type="text"
                placeholder="Digite seu Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)} 
            />
            <Input 
                type="email"
                placeholder="Digite seu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            {erro && <Erro>{erro}</Erro>}
            <Botao type="submit">Enviar</Botao>
        </Formulario>
        </>
    )
}