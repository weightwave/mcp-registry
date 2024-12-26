# Stage 1: Development dependencies
FROM node:18 AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Production build
FROM node:18 AS runner
WORKDIR /app

# Create a non-root user
RUN groupadd -g 1001 nodejs
RUN useradd -u 1001 -g nodejs -s /bin/bash nodeuser

# Copy only necessary files
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set proper permissions
RUN chown -R nodeuser:nodejs /app

# Switch to non-root user
USER nodeuser

# Expose the port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Start the server
CMD ["node", "server.mjs"]
