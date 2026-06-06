# 📱 Mobile

Front-end mobile construído com **Next.js** + **TypeScript**, com layout responsivo otimizado para dispositivos móveis.

## Tecnologias

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## Como rodar

### Pré-requisitos
- Node.js 18+
- Back-end rodando

### Instalação

```bash
# Clone o repositório
git clone https://github.com/NanaAlex/sistema-escolar-mobile.git
cd mobile

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite o arquivo .env.local com a URL da sua API

# Rode em desenvolvimento
npm run dev -- -p 3001
```

Acesse [http://localhost:3001](http://localhost:3001)

### Build para produção

```bash
npm run build
npm start
```

## Estrutura de pastas

```
src/
└── app/
    ├── layout.tsx    # Layout raiz com viewport mobile
    ├── viewport.ts   # Configuração de viewport responsivo
    └── page.tsx      # Página inicial
```

## Variáveis de ambiente

| Variável              | Descrição         | Padrão                  |
|-----------------------|-------------------|-------------------------|
| NEXT_PUBLIC_API_URL   | URL da API back   | http://localhost:3333   |

---

## 🔧 Solução de problemas no Git

### Erro ao fazer `git push` (rejected)

Acontece quando o repositório no GitHub já tem arquivos (ex: README criado pelo GitHub).

```bash
git pull origin main --allow-unrelated-histories
# Vai abrir o editor Vim — digite :wq e pressione Enter para sair
git push -u origin main
```

### Subir alterações do zero novamente

```bash
git add .
git commit -m "sua mensagem aqui"
git push
```

### Se o push rejeitar de novo

```bash
git pull origin main --allow-unrelated-histories
git add .
git commit -m "..."
git push
```
