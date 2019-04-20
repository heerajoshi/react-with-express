# setup working directory
from node:8
ADD . /App 

WORKDIR /App

RUN npm install
# expose port

EXPOSE 8800

cmd ["npm","start"]