# Use the official Node.js LTS (Long Term Support) image as the base image
# FROM node:lts
FROM node:lts as installer

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

# Install the app's dependencies
RUN npm install

# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:lts as release

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY frontend/package*.json ./

COPY --from=installer /app /app

# Copy the rest of the application files to the working directory
COPY frontend/ .

# Build the React app for production
# RUN npm run build

# Expose the app's port
EXPOSE 3000

# Set the command to start the production server
CMD ["npm", "start"]
