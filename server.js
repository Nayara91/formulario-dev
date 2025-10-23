const express = require ("express"); /* Facilita a criação de servidores e conexão HTTP */

const bodyParser = require ("body-parser"); /* Essa constante "puxa" as informações inseridas no front */

const app = express(); /* Aqui ele chama  */

const PORT = 3000 /* Porta que criamos para nossa aplicação funcionar */

// Middleware para permitir que o express leia dados de formulários (urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos da pasta "public"
// Isso permite acessar o index.html e o style.css pelo navegador
app.use(express.static("public"));

// Rota para processar o formulário (quando o usuário clicar em "Enviar")
app.post("/enviar", (req, res) => {
  // req.body contém os dados enviados pelo formulário
  const { nome, sobrenome, email, senioridade, tecnologia, devweb, experiencia } = req.body;

  // Aqui apenas mostramos no console do Node 
  console.log("Dados recebidos:");
  console.log("Nome:", nome);
  console.log("Sobrenome:", sobrenome);
  console.log("Email:", email);
  console.log("Senioridade:", senioridade);
  console.log("Tecnologias:", tecnologia);
  console.log("Profissional:", devweb);
  console.log("Experiência:", experiencia);



  // Resposta enviada de volta ao navegador
  res.send(`<h2>Dados recebidos com sucesso!</h2>
            <p>Nome: ${nome}</p>
            <p>Sobrenome: ${sobrenome}</p>
            <p>Email: ${email}</p>
            <p>Senioridade: ${senioridade}</p>
            <p>Tecnologias: ${Array.isArray(tecnologia) ? tecnologia.join(", ") : tecnologia}</p>
            <p>Profissional: ${devweb}
            <p>Experiência: ${experiencia}
            <a href="/">Voltar</a>`);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});