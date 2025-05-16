import styled from "styled-components"

export const Botao = styled.button`
    background-color: #c073f3;
    padding: 12px 24px;
    color: white;
    border: none;
    border-radius: 15px;
    transition: background-color 0.6s, transform 0.3s, box-shadow 0.9s;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    &:hover {
        transform: translateY(-3px);
        background-color:rgb(152, 73, 204);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }
` 

export const Botao2 = styled.button`
    background-color: #FC4A45;
    padding: 12px 24px;
    color: white;
    border:none;
    border-radius: 15px;
    transition: background-color 0.6s, transform 0.3s, box-shadow 0.9s;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    &:hover {
        transform: translateY(-3px);
        background-color:rgb(236, 21, 17);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
` 

export const Botao3 = styled.button`
    background-color: #008CFF;
    padding: 12px 24px;
    color: white;
    border:none;
    border-radius: 15px;
    transition: background-color 0.6s, transform 0.3s, box-shadow 0.9s;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    &:hover {
        transform: translateY(-3px);
        background-color: #0077cc;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
` 

export const Formulario = styled.form`
    display:flex;
    flex-direction:column;
    gap:12px;
    max-width:300px;
    margin: 0 auto;
`

export const Input = styled.input`
    padding:8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

export const Erro = styled.span`
    color: red;
    font-size:12px;
`
export const BotaoHome = styled.button`
    background-color:rgba(139, 138, 138, 0.6);
    padding: 12px 24px;
    color: white;
    border-color: white;
    border-radius: 15px;
    transition: background-color 0.6s, transform 0.3s, box-shadow 0.9s;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    border:none;
    cursor: pointer;
    &:hover {
        transform: translateY(-3px);
        background-color:rgb(65, 167, 33);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
`

