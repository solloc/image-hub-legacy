FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install http server
RUN npm install http-server -g

# Copy build components to work directory
COPY ./dist/. /usr/src/app

EXPOSE 8080

CMD [ "http-server" ]
