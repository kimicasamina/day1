# Stage 1: Build the React application
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency files first for optimal docker layer caching
COPY package*.json ./

# Install clean dependencies
RUN npm ci

# Copy the rest of the frontend source code
COPY . .

# Run production build (outputs static files to /app/dist)
RUN npm run build

# Stage 2: Production environment to serve static files
FROM nginx:alpine

# Copy a lightweight internal Nginx routing config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from Stage 1 to Nginx public folder
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
