# Use uma imagem base do Node.js
FROM node:latest

# Instale o pnpm globalmente
RUN npm install -g pnpm

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos necessários do seu projeto para o diretório de trabalho
COPY package.json pnpm-lock.yaml ./

# Instale as dependências do projeto usando pnpm
RUN yarn

# Copie todos os arquivos do seu projeto para o diretório de trabalho
COPY . .

# Exponha a porta em que o servidor Fastify está ouvindo (geralmente 3000)
EXPOSE 3000

# Comando para iniciar o servidor Fastify quando o contêiner for iniciado
CMD ["yarn", "dev"]
