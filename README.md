# Junie Finance Dashboard API

A RESTful API providing financial data and metrics for the Junie Finance Dashboard.

## Description

This API serves various financial data including stock indices, cryptocurrency indices, interest rates, and daily
banking metrics. It's built with Express.js and includes Swagger documentation.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Docker (for containerized deployment)

## Running Locally

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

   For development mode with debug logging:
   ```
   npm run start:dev
   ```

   For production mode with optimized settings:
   ```
   npm run start:prod
   ```
4. Access the API at http://localhost:3000
5. View API documentation at http://localhost:3000/api-docs

## Production Build and Deployment

### Building for Production

To build the application for production:

```bash
npm run build
```

This will:

1. Create the logs directory
2. Install only production dependencies

### Docker Deployment

The Dockerfile is optimized for production with a multi-stage build process:

- First stage: Builds the application with all dependencies
- Second stage: Creates a minimal production image with only necessary files and production dependencies

#### Building the Docker Image

```bash
docker build -t junie-finance-dashboard-api .
```

#### Running the Docker Container

```bash
docker run -p 3000:3000 -d --name junie-finance-api junie-finance-dashboard-api
```

This will start the container in detached mode with production settings and map port 3000 from the container to port
3000 on the host.

#### Environment Variables

You can customize the port by setting the PORT environment variable:

```bash
docker run -p 8080:8080 -e PORT=8080 -d --name junie-finance-api junie-finance-dashboard-api
```

#### Accessing Logs

To view logs from the Docker container:

```bash
# View all logs
docker logs junie-finance-api

# Follow logs in real-time
docker logs -f junie-finance-api
```

You can also mount a volume to persist logs outside the container:

```bash
docker run -p 3000:3000 -v $(pwd)/logs:/usr/src/app/logs -d --name junie-finance-api junie-finance-dashboard-api
```

## Logging

The application uses Winston for comprehensive logging:

- **Console Logging**: All logs are output to the console with appropriate colors based on log level
- **File Logging**:
    - All logs are stored in `logs/all.log`
    - Error logs are separately stored in `logs/error.log`
- **Log Levels**:
    - In development mode: debug, info, http, warn, error
    - In production mode: info, warn, error

Log files are automatically created when the application starts. The logs directory is excluded from Git and Docker.

## API Endpoints

- `/stockIndices` - Stock market indices data
- `/cryptoIndices` - Cryptocurrency indices data
- `/interestRates` - Interest rates data
- `/dailyMetrics` - Daily banking metrics
- `/marketOverview` - Market overview data
- `/timeLabels` - Time labels for charts

For detailed API documentation, visit the `/api-docs` endpoint when the server is running.
