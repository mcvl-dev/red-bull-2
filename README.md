# Red Bull Symphonic Brasil

Site em React e Vite. Use Node.js 24.

## Rodar localmente

```sh
npm ci
npm run dev
```

Para gerar e visualizar o build de produção, execute `npm run build` e depois `npm run preview`.

## Publicar na Vercel

Importe `mcvl-dev/red-bull-2` na Vercel e selecione a branch `main` para produção. Use a raiz do repositório como diretório do projeto. O arquivo `vercel.json` configura o build e a pasta de saída. Esta versão do site não precisa de variáveis de ambiente.
