# Quest React - DevQuest 2.0 🎬

Este projeto é um desafio (Quest) do curso DevQuest 2.0, focado no desenvolvimento de uma aplicação React moderna que consome dados da API do Studio Ghibli para listar e detalhar seus filmes.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias e bibliotecas:

- **[React 19](https://react.dev/):** Biblioteca principal para construção da interface.
- **[TypeScript](https://www.typescriptlang.org/):** Adição de tipagem estática para maior segurança no desenvolvimento.
- **[Vite](https://vitejs.dev/):** Ferramenta de build e servidor de desenvolvimento extremamente rápido.
- **[React Router DOM](https://reactrouter.com/):** Gerenciamento de rotas da aplicação (Navegação).
- **[TanStack React Query](https://tanstack.com/query/latest):** Gerenciamento de estados assíncronos e cache de dados da API.
- **[Tailwind CSS 4](https://tailwindcss.com/):** Framework CSS utilitário para estilização rápida e moderna.

## 📦 Funcionalidades

- Listagem de 10 filmes do Studio Ghibli consumindo a API oficial.
- Detalhes individuais de cada filme.
- Navegação entre páginas (Home e Detalhes).
- Tratamento de estados de carregamento (Loading) e erros.

## 🛠️ Como executar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/quest-react-devquest.git
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd quest-react-devquest
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   O Vite geralmente disponibiliza o projeto em `http://localhost:5173`.

## 📁 Estrutura de Pastas

```text
src/
├── assets/      # Imagens e arquivos estáticos
├── components/  # Componentes reutilizáveis (Header, Layout, etc)
├── hooks/       # Hooks customizados (useFilmList)
├── pages/       # Páginas da aplicação (Home, FilmDetail)
├── routes/      # Configuração das rotas com React Router
└── styles/      # Arquivos de estilo global
```

---
Desenvolvido por Eric Barros Arco-Verde como parte do aprendizado no curso **DevQuest**.
