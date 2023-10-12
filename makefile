restart:
	docker-compose down
	docker-compose build
	docker-compose up -d
	docker ps -a
start:
	docker-compose build
	docker-compose up -d
	docker ps -a
stop:
	docker-compose down
	docker ps -a
clean:
	docker-compose down --rmi all
	docker ps -a
