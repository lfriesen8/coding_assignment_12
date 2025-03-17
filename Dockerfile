# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /lastName_firstName_ui_garden_build_checks

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# ✅ Build Storybook (instead of React production build)
RUN npm run build-storybook

# ✅ Install http-server globally to serve Storybook
RUN npm install -g http-server

# ✅ Expose port 8018 for Storybook
EXPOSE 8018

# ✅ Serve the built Storybook instead of the React app
CMD ["http-server", "storybook-static", "-p", "8018"]

