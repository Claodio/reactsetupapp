FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install gcc g++ make
ADD . /home/react
EXPOSE 1335
ENTRYPOINT npm start
ENV name React
