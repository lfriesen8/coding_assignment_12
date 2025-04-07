# Build Stage
FROM node:18-alpine AS build

WORKDIR /friesen_liam_final_site

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production Stage
FROM node:18-alpine

WORKDIR /friesen_liam_final_site
RUN npm install -g serve

COPY --from=build /friesen_liam_final_site/build ./build

EXPOSE 5575
CMD ["serve", "-s", "build", "-l", "5575"]

