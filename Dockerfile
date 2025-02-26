# Use an official Node.js image as the base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /lastName_firstName_ui_garden

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the built app
RUN npm install -g serve

# Expose port 8083 for access
EXPOSE 8083

# Command to run the app
CMD ["serve", "-s", "build", "-l", "8083"]
