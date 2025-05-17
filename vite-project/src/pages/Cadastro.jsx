import { Formulario, Input, BotaoHeader, Erro } from "../components/Styles";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!nome.trim() || !email.trim() || !senha.trim()) {
      setErro("Por favor, preencha todos os campos");
      return;
    }

    setErro("");

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: nome,
          email: email,
          password: senha,
        }),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        // Aqui você pode redirecionar para a página de login, por exemplo
      } else {
        const msg = await response.text();
        setErro(msg);
      }
    } catch (error) {
      setErro("Erro ao conectar com o servidor.");
    }
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          alignSelf: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "420px",
          padding: "20px",
        }}
      >
        <div
          style={{
            boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.39)",
            background: "white",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              color: "white",
              background: "linear-gradient(90deg, #6432A1, #A148DD)",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <img
              src="imagens/logo/LogoTextoInstitutoBranco.png"
              alt="Instituto Criativo"
              width="252"
              height="42"
            />
            <div className="auth-title">Crie sua conta</div>
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
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            {erro && <Erro>{erro}</Erro>}
            <BotaoHeader type="submit">Enviar</BotaoHeader>
            <Link to="/login">
              <p style={{ textAlign: "center" }}>Já tem cadastro? Faça o login</p>
            </Link>
          </Formulario>
        </div>
      </div>
    </section>
  );
}
