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
4. Access the API at http://localhost:3000
5. View API documentation at http://localhost:3000/api-docs

## Docker Deployment

### Building the Docker Image

```bash
docker build -t junie-finance-dashboard-api .
```

### Running the Docker Container

```bash
docker run -p 3000:3000 -d --name junie-finance-api junie-finance-dashboard-api
```

This will start the container in detached mode and map port 3000 from the container to port 3000 on the host.

### Environment Variables

You can customize the port by setting the PORT environment variable:

```bash
docker run -p 8080:8080 -e PORT=8080 -d --name junie-finance-api junie-finance-dashboard-api
```

## API Endpoints

- `/stockIndices` - Stock market indices data
- `/cryptoIndices` - Cryptocurrency indices data
- `/interestRates` - Interest rates data
- `/dailyMetrics` - Daily banking metrics
- `/marketOverview` - Market overview data
- `/timeLabels` - Time labels for charts

For detailed API documentation, visit the `/api-docs` endpoint when the server is running.
