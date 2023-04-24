FROM node:14

WORKDIR /crud

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3100

CMD [ "npm", "start" ]