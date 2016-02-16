FROM node:4.3.0

ENV PORT=8080
EXPOSE 8080

RUN mkdir -p /app
WORKDIR /app
COPY . /app

CMD ["npm", "run", "start"]
