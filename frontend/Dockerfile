# Stage 1
FROM node:10.14-alpine as react-build
WORKDIR /app
COPY . ./
RUN yarn install
RUN yarn build

# Stage 2
FROM nginx:alpine
COPY --from=react-build /app/build /usr/share/nginx/html