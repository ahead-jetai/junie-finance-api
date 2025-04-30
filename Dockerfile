FROM node:18-alpine AS build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies for build
RUN npm install

# Copy the rest of the application
COPY . .

# Create production image
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Copy source from build stage
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/routes ./routes
COPY --from=build /usr/src/app/views ./views
COPY --from=build /usr/src/app/app.js ./
COPY --from=build /usr/src/app/bin ./bin
COPY --from=build /usr/src/app/logger.js ./

# Create logs directory
RUN mkdir -p logs

# Install production dependencies only
RUN npm install --production

# Set environment to production
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start:prod"]
