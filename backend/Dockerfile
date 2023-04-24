FROM node:16

WORKDIR /backend

COPY package*.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 2000

CMD [ "npm", "start" ]