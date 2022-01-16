FROM node:alpine
WORKDIR /app
COPY package*.json .
RUN npm i
COPY index.js .
CMD ["node", "index"]