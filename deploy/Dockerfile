FROM node:22-bullseye

WORKDIR /app

COPY .output /app

EXPOSE 3000

ENV APP_HOST=0.0.0.0
ENV APP_PORT=3000

CMD [ "node", "server/index.mjs" ]
