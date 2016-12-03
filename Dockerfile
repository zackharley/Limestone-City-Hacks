FROM node:7.0
EXPOSE 8000
COPY . .
RUN npm install
CMD npm start