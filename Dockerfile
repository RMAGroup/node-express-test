FROM node:alpine
WORKDIR /app
COPY package*.json .
RUN npm i
COPY foods.json .
COPY index.js .
CMD ["node", "index"]