FROM nginx

ENV APP_HOME /usr/share/nginx/html

COPY ./html ${APP_HOME}

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]