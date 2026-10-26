# Stage 1: Build the React Frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /build
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm ci
COPY frontend/ ./frontend/
RUN cd frontend && npm run build

# Stage 2: Production runtime (Wipes out dev tools, keeping it ultra-tiny)
FROM node:20-alpine
WORKDIR /usr/src/app

# Copy package definitions and install production libraries only
COPY backend/package*.json ./
RUN npm ci --only=production

# Copy backend source files
COPY backend/ .

# Pull ONLY the compiled static assets from Stage 1
COPY --from=frontend-builder /build/frontend/dist ./frontend/dist

EXPOSE 8080
CMD ["node", "index.js"]
