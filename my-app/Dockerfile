# pull official base image
FROM node:20-alpine

#Set the working directory for any commands
WORKDIR /my-app

# Copy the package.json file.
COPY package.json .
 
# Install application dependencies.
RUN npm install
 
# Copy the rest of the application files.
COPY . .

#Build and test app
RUN npm run build

CMD [ "npm","start" ]


