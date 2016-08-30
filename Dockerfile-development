FROM alpine:3.4

MAINTAINER spondbob spondbob@eamca.com

# Install Nodejs
RUN apk add --update nodejs

# Install & cache modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm i webpack webpack-dev-server -g && npm install

ENV NODE_ENV development

# Add base code & node modules to app
ENV app /var/app
RUN mkdir -p $app && cp -a /tmp/node_modules $app
WORKDIR $app
ADD . $app

CMD ["npm", "start"]