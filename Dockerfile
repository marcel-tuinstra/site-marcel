# Dockerfile
FROM node:22-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build for production
RUN npm run build

EXPOSE 3000

# Run the app
CMD ["npm", "run", "start"]