FROM node:22-alpine AS builder
WORKDIR /app

# Update base image packages for security patches
RUN apk upgrade --no-cache

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

ARG NUXT_PUBLIC_GTAG_ID
ENV NUXT_PUBLIC_GTAG_ID=${NUXT_PUBLIC_GTAG_ID}

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run generate

FROM nginx:1.27-alpine

# Update base image packages for security patches
RUN apk upgrade --no-cache && apk add --no-cache curl

COPY --from=builder /app/.output/public /usr/share/nginx/html
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:80/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
