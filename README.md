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

## 🔧 Solução de problemas

### Erro ao rodar `npm run dev`

Limpa o cache e reinstala tudo do zero:

```bash
# Para o servidor (CTRL + C) e rode:
rm -rf .next
rm -rf node_modules
npm install
npm run dev -- -p 3001
```

### Erro de porta em uso

Se a porta 3001 já estiver ocupada:

```bash
npm run dev -- -p 3002
```

### Erro de módulo não encontrado

```bash
rm -rf node_modules
npm install
```

### Limpar tudo e começar do zero

```bash
rm -rf .next node_modules
npm install
npm run dev -- -p 3001
```
