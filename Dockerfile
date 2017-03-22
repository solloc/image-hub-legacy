FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# COPY package.json /usr/src/app/
# RUN npm install

RUN npm install http-server -g

COPY ./dist/. /usr/src/app

EXPOSE 8080

#RUN http-server

# Bundle app source
# COPY . /usr/src/app

# EXPOSE 4200

CMD [ "http-server" ]
