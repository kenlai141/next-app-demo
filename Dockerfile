FROM node:18-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

FROM node:18-alpine As production

WORKDIR /usr/src/app

COPY public/ public
COPY package*.json ./
COPY --from=development /usr/src/app/.next ./.next

RUN npm install --omit=dev

CMD ["npm", "run", "start"]