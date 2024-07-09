FROM node:20-alpine

# INSTALL APP
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
