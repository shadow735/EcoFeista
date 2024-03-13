# Stage 1: Build the React frontend
FROM node:14-alpine AS frontend

# Set the working directory for the frontend
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend code to the container
COPY . .

# Build the frontend
RUN npm run build

# Stage 2: Build the Node.js backend
FROM node:14-alpine AS backend

# Set the working directory for the backend
WORKDIR /app/backend

# Copy package.json and package-lock.json to the container
COPY server/package.json server/package-lock.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend code to the container
COPY server .

# Expose the port that the backend will run on
EXPOSE 8080

# Start the backend server
CMD ["node", "server.js"]
