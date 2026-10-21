FROM node:24-slim

ENV NODE_ENV=production
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --chown=node:node app.js server.js ./

USER node
EXPOSE 3000
CMD ["node", "server.js"]
