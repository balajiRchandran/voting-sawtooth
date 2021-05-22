FROM node:7
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . /app
CMD [ "node", "index.js" ]
EXPOSE 4004