FROM node:alpine

ENV NODE_ENV=dev

WORKDIR /dialogflow

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "dev"]

