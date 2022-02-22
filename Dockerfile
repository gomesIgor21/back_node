FROM node:alpine as builder

WORKDIR /app
COPY package.json /app

RUN npm install

FROM node:alpine

COPY --from=builder /app /app
COPY /server /app/server

EXPOSE 3000

CMD ["node", "/app/server/server.js"]
