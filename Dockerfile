##Nodejs

FROM node:7.7.2-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY --chown=node:node . /app

USER node
RUN npm install --silent --progress=false
EXPOSE 8080

CMD npm run docker
