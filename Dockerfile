FROM node:20-alpine

# Update container

RUN apk update && apk add --no-cache \
    coreutils \
    sed

# INSTALL APP
WORKDIR /app

# Entrypoint
COPY entrypoint.sh /app/entrypoint.sh

COPY package*.json ./
RUN npm install && npm install -g pm2

COPY . .

EXPOSE 4000
EXPOSE 4001
EXPOSE 4002

ENTRYPOINT [ "/app/entrypoint.sh" ]
CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]