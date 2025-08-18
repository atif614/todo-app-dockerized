FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm config set strict-ssl false

EXPOSE 5173

CMD ["sh", "-c", "npm install --legacy-peer-deps && npm run dev -- --host"]
