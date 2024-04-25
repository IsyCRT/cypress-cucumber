FROM cypress/included:13.5.1
WORKDIR /app
COPY . /app
RUN npm install
RUN npx cypress verify
CMD [ "npx", "cypress", "run" ]
