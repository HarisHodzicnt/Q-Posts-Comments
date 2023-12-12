FROM node:18-alpine3.17 as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

RUN yarn build

FROM nginx:stable-alpine as production
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]