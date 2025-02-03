# Documentação do Projeto

## Visão Geral
Este projeto consiste em três partes principais:
1. **API** - Desenvolvida em **Nest.js** usando **TypeScript**.
2. **Site** (**Odonto_Site**) - Desenvolvido em **Vue.js** com **TypeScript**.
3. **Aplicativo Mobile** - Criado com **Expo.js** utilizando **TypeScript**.

Todas as partes do projeto estão organizadas dentro do mesmo diretório.

---

## Estrutura do Projeto
```
projeto/
│── api/              # API Nest.js
│── site/             # Site Odonto_Site (Vue.js + TypeScript)
│── app/              # Aplicação Mobile (Expo.js + TypeScript)
│── package.json      # Dependências do projeto
│── README.md         # Documentação
```

---

## Configuração e Instalação

### 1. Configurando a API (Nest.js)
```sh
cd api
pnpm install
pnpm run start:dev
```
A API será executada em `http://localhost:3000`.

### 2. Configurando o Site (Vue.js + TypeScript)
```sh
cd site
pnpm install
pnpm run dev
```
O site será acessível em `http://localhost:5173`.

### 3. Configurando o Aplicativo Mobile (Expo.js)
```sh
cd app
pnpm install
npx expo start
```
Escaneie o QR code para abrir o aplicativo no celular ou use um emulador.

---

## Tecnologias Utilizadas

### **API (Nest.js + TypeScript)**
- Nest.js
- TypeScript
- Prisma (ORM)
- PostgreSQL
- JWT (Autenticação)

### **Site (Vue.js + TypeScript)**
- Vue.js 3
- Vue Router
- Pinia (Gerenciamento de estado)
- Tailwind CSS

### **Aplicação Mobile (Expo.js + TypeScript)**
- Expo.js
- React Native
- React Navigation
- Axios

---

Para o site, crie um `.env` dentro de `site/`:
```
VITE_API_URL=http://localhost:3000
```

Para o app, crie um `.env` dentro de `app/`:
```
EXPO_PUBLIC_API_URL=http://localhost:3000
```

---

## Estrutura de Diretórios por Projeto

### **API (Nest.js)**
```
api/
│── src/
│   ├── main.ts            # Arquivo principal
│   ├── app.module.ts      # Módulo principal
│   ├── users/             # Módulo de usuários
│   ├── auth/              # Módulo de autenticação
│   ├── prisma.service.ts  # Conexão com banco
```

### **Site (Vue.js + TypeScript)**
```
site/
│── src/
│   ├── main.ts
│   ├── App.vue
│   ├── router/
│   ├── store/
│   ├── views/
│   ├── components/
```

### **Aplicação Mobile (Expo.js + TypeScript)**
```
app/
│── src/
│   ├── App.tsx
│   ├── screens/
│   ├── components/
│   ├── services/
```

---

## Contato
Para dúvidas ou sugestões, entre em contato:
- **GitHub**: [seu-usuario](https://github.com/eusouanderson)
- **E-mail**: eusouanderson@outlook.com

---

## Licença
Este projeto está sob a licença MIT.