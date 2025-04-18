# Base Nuxt image
FROM node:22-alpine

# Install system dependencies
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY . .
RUN npm install

# Build Nuxt for production (creates .output/)
RUN npm run build

# Expose Nuxt default port
EXPOSE 3000

# Start Nuxt server (SSR mode)
CMD ["node", ".output/server/index.mjs"]