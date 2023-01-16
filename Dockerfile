FROM node:latest

WORKDIR /react-app

COPY package*.json .
RUN npm install
ENV PORT 3000
ENV production true
COPY . .

EXPOSE 3000
RUN npm run build:prod
CMD ["npm", "start"]