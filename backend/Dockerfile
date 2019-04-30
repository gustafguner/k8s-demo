FROM node:10.14

WORKDIR /app 

COPY package*json ./

COPY yarn.lock ./

RUN yarn install

COPY src ./src

EXPOSE 4000

CMD yarn start