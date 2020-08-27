FROM node:12

WORKDIR /usr/src/app/yostorecosmetics

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

EXPOSE 4200

CMD ["npm", "start"]