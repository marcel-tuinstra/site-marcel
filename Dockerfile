# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app
COPY . .

RUN apk add --no-cache git && \
    npm install && \
    npm run build

# Stage 2: Runtime
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/.output .output
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]