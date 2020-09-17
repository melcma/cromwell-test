FROM nginx:alpine

RUN apk add --no-cache yarn

COPY config/cromwell-test.conf /etc/nginx/conf.d
COPY build /usr/share/nginx/html