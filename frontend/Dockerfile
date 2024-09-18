# FROM node:latest AS build 

# WORKDIR /build
# COPY package.json package.json
# COPY package-lock.json package-lock.json

# RUN npm config set legacy-peer-deps true
# RUN npm ci
# COPY public/ public
# COPY src/ src

# RUN npm run build


# FROM httpd:alpine
# WORKDIR /var/www/html
# COPY --from=build /build/build/ .
# CMD ["npm", "start"]

# frontend/Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm config set legacy-peer-deps true
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# # stage1 - build react app first 
# FROM node:12.16.1-alpine3.9 as build
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY ./package.json /app/
# COPY ./package-lock.json /app/
# RUN npm config set legacy-peer-deps true
# RUN npm ci
# COPY . /app
# RUN npm run build

# # stage 2 - build the final image and copy the react build files
# FROM nginx:1.17.8-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]