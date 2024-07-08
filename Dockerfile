FROM node:20-alpine

# INSTALL APP
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 4000

CMD ["npm", "run", "prod"]
