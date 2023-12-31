# ⚔️ Back-end - API REST: Star Wars

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/polianams/api-star-wars?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/polianams/api-star-wars">
  
  <a href="https://github.com/polianams/api-star-wars/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/polianams/api-star-wars">
  </a>
  
   <a href="https://www.linkedin.com/in/polianams/">
    <img alt="Feito por Poliana Santos" src="https://img.shields.io/badge/feito-por%20Poliana%20Santos-D818A5">
   </a>
   
   <a href="https://github.com/polianams/api-star-wars/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/polianams/api-star-wars?style=social">
  </a>
</p>

<h4 align=center> 
	🚧 API REST STAR WARS (CRUD) 🚧
</h4>

<p align="center">
	<img alt="Status Concluído" src="https://img.shields.io/badge/STATUS-CONCLU%C3%8DDO-brightgreen">
</p>

## 📝 Sobre o Projeto

O projeto consiste em desenvolver uma API REST que interage com a API externa [SWAPI - Star Wars API](https://swapi.dev/) para fornecer informações sobre a franquia Star Wars. A API permite que os usuários visualizem detalhes sobre filmes, personagens e naves espaciais, bem como adicionem itens específicos aos favoritos após o registro e autenticação.

## 📋 Funcionalidades

Com esta API REST, os usuários podem realizar as seguintes ações:

### ⭐ Funcionalidades Principais:

- `Listar Filmes`: Os usuários podem obter uma lista de todos os filmes da franquia Star Wars;
- `Detalhes do Filme`: Retorna informações detalhadas de um filme específico com base no ID fornecido;
- `Listar Personagens`: Retorna uma lista de todos os personagens notáveis da franquia Star Wars;
- `Detalhes do Personagem`: Retorna informações detalhadas sobre um personagem específico com base no ID fornecido;
- `Listar Planetas`: Os usuários podem obter uma lista de todos os planetas do universo de Star Wars;
- `Detalhes do Planeta`: Obtém informações detalhadas de um planeta específico com base no ID fornecido;
- `Registro de Usuário`: Permite que os usuários criem uma conta na aplicação fornecendo um nome de usuário e uma senha segura;
- `Autenticação de Usuário`: Permite que os usuários façam login na aplicação utilizando suas credenciais registradas para acessar recursos protegidos;

🚨🚨🚨 EM BREVE:

- `Listar Favoritos`: Retorna uma lista de filmes e personagens favoritos do usuário autenticado;
- `Adicionar aos Favoritos`: Permite que os usuários autenticados adicionem filmes e personagens específicos à sua lista de favoritos;
- `Remover dos Favoritos`: Permite que os usuários autenticados removam filmes e personagens de sua lista de favoritos, se desejarem;
- `Deletar Conta`: Permite que os usuários removam todos os dados relacionados a API.

### 🌟 Funcionalidades Adicionais:

- `Segurança de Dados`: Senhas dos usuários são criptografadas usando Bcrypt para garantir a segurança das informações pessoais;
- `Token JWT`: A autenticação de usuário é feita por meio de tokens JWT para proteger rotas sensíveis e garantir uma experiência segura;

🚨🚨🚨 EM BREVE:

- `Testes Unitários`: A lógica de negócios é testada usando Jest para garantir que todas as funcionalidades estejam funcionando conforme o esperado.

A documentação detalhada de todos os endpoints e parâmetros será fornecida usando Swagger, oferecendo uma visão clara e interativa de todas as funcionalidades disponíveis na API. Isso facilitará a integração e o uso da API para os desenvolvedores e usuários finais.

## ▶️ Como executar o projeto

### 🛠️ Pré-requisitos

Antes de começar, verifique se você tem os seguintes requisitos instalados em seu sistema. Embora os exemplos abaixo sejam comuns, você pode usar alternativas similares:

- Possuir um editor de código-fonte, por exemplo [VSCode](https://code.visualstudio.com/download) ou [Vim](https://www.vim.org/download.php);
- Possuir o [Git](https://git-scm.com/downloads) ou qualquer outro programa de versionamento;
- Possuir o [Node.js](https://nodejs.org/en/download/current) (versão 18.16.0 ou superior);
- Possuir o [Insomnia](https://insomnia.rest/download), [Postman](https://www.postman.com/downloads/) ou qualquer outro programa similar instalado;
- Possuir o [Beekeeper](https://www.beekeeperstudio.io/) instalado para criar e acessar o banco de dados (versão 3.9.20 ou superior) ou qualquer outro programa similar.

### ⚙️ Instalação

1. Clone este repositório em sua máquina local:
2. Navegue até o diretório do projeto:

```
cd nome_da_pasta
```

3. Instale as dependências através do comando:

```
npm install
```

4. Para executa-lo digite no terminal do seu editor de código:

```
npm run dev
```

5. No terminal, aparecerá a seguinte mensagem: `O Servidor está sendo executado na porta 3000.`;
6. Após exibir a mensagem acima, é necessário configurar o Beekeeper (ou um programa de sua preferência) para gerenciar o banco de dados. Siga as configurações do arquivo `databaseConfig.js`, localizado na pasta `src/config`, para se conectar corretamente ao banco de dados;

## 🚀 Tecnologias Utilizadas

### Dependências:

1. Node.js (versão 18.16.0): Uma plataforma JavaScript assíncrona que é amplamente utilizada para construir aplicativos de rede escaláveis.

2. Bibliotecas:

- `Express (versão 4.18.2)`: Um framework Node.js rápido, não opinativo e minimalista para construir APIs e aplicativos web robustos;
- `Date-fns (versão 2.30.0)`: Uma biblioteca moderna de manipulação de datas para JavaScript;
- `Bcrypt (versão 5.1.1)`: Uma biblioteca para ajudar a criptografar senhas e dados confidenciais de forma segura;
- `jsonwebtoken (versão 9.0.1)`: Uma implementação de JSON Web Tokens para autenticação de usuários;
- `pg ou node-postgres (versão 0.6.2)`: Um cliente PostgreSQL para Node.js que permite interagir com bancos de dados PostgreSQL;

### Dependências de Desenvolvimento:

- `Nodemon (versão 3.0.1)`: Uma ferramenta que monitora alterações nos arquivos do aplicativo e reinicia automaticamente o servidor durante o desenvolvimento;
- `TypeScript`: Uma linguagem de programação que se baseia em JavaScript adicionando tipos estáticos para melhorar a robustez e a manutenção do código.

## 🤝 Contribuição

Contribuições são bem-vindas! Se você quiser melhorar ou adicionar novos recursos a esta API, siga as etapas abaixo:

1. Crie um Fork deste repositório;
2. Crie uma branch para suas alterações: `git checkout -b my-feature`;
3. Commit suas alterações: `git commit -m 'Adicionar nova funcionalidade'`;
4. Faça push para a branch: `git push origin my-feature`;
5. Abra um pull request.

## 🧙‍♂️ Autora

Projeto Back-end desenvolvido por [Poliana Santos](https://www.linkedin.com/in/polianams/), como desafio do modulo 3 do curso de Desenvolvimento de Software - Foco em Back-end da [Cubos Academy](https://cubos.academy/) ✨

## 📝 Licença

Feito por Poliana Santos 👋🏽 [Entre em contato!](https://www.linkedin.com/in/polianams/)

Divirta-se explorando a API! 🌟

###### tags: `back-end` `nodeJS` `PostgreSQL` `API REST` `bcrypt` `SQL` `star-wars`.
