### 1. Without Dockerfile 

### How to create image in Docker

 First we take ubuntu image from docker hub - ubuntu, using below command

     docker run -it ubuntu

 `-it` mean interactive mode

CONT_ID is container id, that we can get using `docker container ls -a`

    docker commit CONT_ID node-docker-img

IMG_ID is images id that we can get using `docker images` 

    docker tag IMG_ID DOCKER_HUB_USER_NAME/node-docker-img:1.0

Here 1.0 is version number, you can set it as per required.

    docker push DOCKER_HUB_USER_NAME/node-docker-img:1.0

------------------------------------------------------------------------------------------------
### Remove all container and Images 

    docker stop $(docker ps -a -q)
    docker rm $(docker ps -a -q)
    docker rmi -f $(docker images -a -q)


------------------------------------------------------------------------------------------------

### 2. Using Dockerfile

####  Create dockerfile using below command
    vi Dockerfile

#### Add following code in Dockerfile

    FROM ubuntu:14.04.4
    RUN apt-get update && apt-get install -y nodejs

----------------------------------------------------------------------------
#### Build and run the image using below command


    docker build -t ubuntu-node-img .
    docker run -it ubuntu-node-img

#### CONT_ID is container id, that we can get using docker container ls -a

    docker commit CONT_ID ubuntu-node-img

#### IMG_ID is images id that we can get using docker images 

    docker tag IMG_ID etechice/ubuntu-node-img:1.0

#### Here lastest is version number, you can set it 1.0

    docker push DOCKER_HUB_USER_NAME/ubuntu-node-img:1.0

#### run this image from docker hub

    docker run -it DOCKER_HUB_USER_NAME/ubuntu-node-img:1.0
    
#### run below command to check nodejs is installed or not

     nodejs --version
