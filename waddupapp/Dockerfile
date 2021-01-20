FROM node:15
WORKDIR /home/node/app
COPY app/package*.json /home/node/app
RUN npm install
COPY app /home/node/app
ENV PORT = 3333
CMD ["npm", "run", "app"]