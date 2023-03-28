FROM node:18-alpine

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "run", "dev", "--mode","staging", "--host", "0.0.0.0"]
