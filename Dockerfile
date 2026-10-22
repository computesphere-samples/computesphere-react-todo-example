FROM node:22-alpine

# pnpm-lock.yaml is lockfile v6, which pnpm 8 reads; newer pnpm refuses the build.
RUN corepack enable && corepack prepare pnpm@8.15.9 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

EXPOSE 4173

CMD [ "pnpm", "run", "preview" ]