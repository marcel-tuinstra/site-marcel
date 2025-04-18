# Base Nuxt image
FROM node:22-alpine

# Install system dependencies
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY . .
RUN npm install

# Expose the default Nuxt port
EXPOSE 3000

# Start Nuxt in production
CMD ["npm", "run", "start"]