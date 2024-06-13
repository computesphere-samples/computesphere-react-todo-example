FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 4173

CMD [ "pnpm", "run", "preview" ]