status:
	docker ps

start:
	docker-compose build
	docker-compose up -d
stop:
	docker-compose down
clean:
	docker-compose down --rmi all

restart: stop start status
