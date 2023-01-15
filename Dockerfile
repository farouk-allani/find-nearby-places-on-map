FROM node:14.4.0-alpine3.12
WORKDIR /Project
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]