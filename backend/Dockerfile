FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package definitions first
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy backend application source files
COPY . .

# Expose internal application port
EXPOSE 8080

# Start the application
CMD ["node", "index.js"]
