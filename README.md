
#Example using Docker, Nginx, Nodejs and MySQL.
This is a Docker setup for a web application based on Nodejs.

- A simple Nodejs helloworld applicaiton.
- Registered a domain "sreeexample.tk" in Freenom to test all the scenarios listed.
- Used AWS to test the functionality.
- Volumes are mounted for data persistance as requested.
- Custom Nginx configuration
	- Enabled HTTP to HTTPS redirection
	- Used Certbot for certificate
	- Generated and used dhparam to create dh key
	- Added required headers


## Requirements for testing
- Docker and docker-compose should be available
- Need to replace domain sreeexample.tk with your domain
- Checkout the code and follow the same directory structure
- Generate dhparam key with open ssl command
	- sudo openssl dhparam -out /<location>/dhparam-2048.pem 2048	
- Need to change the path of the volumes appropriately

## Commands
- To build an image from dockerfile 
	- docker build -t <image_name> .
- To start containers using detached mode
	- docker-compose up -d 
- To check the status of containers
	- docker-compose ps
- To check the logs of containers
	- docker-compose logs <service_name>
- To check the volumes in the container
	- docker-compose exec <container_name> ls <path>
- Generating key with open ssl command
	- sudo openssl dhparam -out /<location>/dhparam-2048.pem 2048

##Test
- Finally you can test your application by hitting the domain https://<domainname>
