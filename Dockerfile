FROM nginx:alpine

COPY config/cromwell-test.conf /etc/nginx/conf.d
COPY build /usr/share/nginx/html