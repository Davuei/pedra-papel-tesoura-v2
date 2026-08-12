# ETAPA 1: O Construtor (Node.js)
FROM node:20-alpine AS builder
WORKDIR /app

# Copia os arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o resto do código do seu React e gera os arquivos estáticos (Vite)
COPY . .
RUN npm run build


# ETAPA 2: O Servidor de Produção (Nginx)
FROM nginx:alpine

# Remove a página padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia apenas a pasta "dist" (gerada pelo Vite na Etapa 1) para a pasta pública do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia o nosso arquivo de configuração (vamos criar no Passo 2)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 do container
EXPOSE 80

# Liga o Nginx e não deixa ele desligar
CMD ["nginx", "-g", "daemon off;"]