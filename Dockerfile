# Base Nuxt image
FROM node:22-alpine

# Install system dependencies
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Nuxt app
RUN npm run build

# Expose the port
EXPOSE 3000

# Run the app in production
CMD ["node", ".output/server/index.mjs"]