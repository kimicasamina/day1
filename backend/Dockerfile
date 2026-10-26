# Stage 1: Build the React Frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /build
# Note: Context will be set to root, so paths include frontend/
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm ci
COPY frontend/ ./frontend/
RUN cd frontend && npm run build

# Stage 2: Production runtime for Express Backend
FROM node:20-alpine
WORKDIR /usr/src/app

# Copy package definitions and install production dependencies only
COPY backend/package*.json ./
RUN npm ci --only=production

# Copy backend application source files
COPY backend/ .

# Pull ONLY the compiled production static assets from Stage 1
# This places them exactly where your index.js expects: /usr/src/app/frontend/dist
COPY --from=frontend-builder /build/frontend/dist ./frontend/dist

EXPOSE 8080
CMD ["node", "index.js"]
