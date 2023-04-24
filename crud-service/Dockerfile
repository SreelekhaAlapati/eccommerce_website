FROM node:14

WORKDIR /crud-service

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
