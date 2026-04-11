# ----------- BUILD STAGE -----------
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar código
COPY . .

# Build NestJS
RUN npm run build


# ----------- PRODUCTION STAGE -----------
FROM node:20-alpine

WORKDIR /app

# Solo dependencias de producción
COPY package*.json ./
RUN npm install --omit=dev

# Copiar build
COPY --from=builder /app/dist ./dist

# Exponer puerto
EXPOSE 3000

# Ejecutar app
CMD ["node", "dist/main.js"]