# Top-level Makefile
# cd /mnt/d/Documents/Career/Development/bryan-gittens

SUBFOLDERS := backend database frontend test-sql
.PHONY: status $(SUBFOLDERS)

all: build

status:
	docker images -a ;
	docker ps -a ;
	netstat -tulpn ;

status-db:
	mssql -s 127.0.0.1 --port 1433 -u sa -p 'A&VeryComplex123Password' -q 'SELECT @@VERSION' ;
	mssql -s 127.0.0.1 --port 1433 -u sa -p 'A&VeryComplex123Password' -q 'SELECT name FROM sys.databases' ;
	mssql -s 127.0.0.1 --port 1433 -d 'TimestampsDb' -u sa -p 'A&VeryComplex123Password' -q 'SELECT * FROM INFORMATION_SCHEMA.TABLES' ;
	mssql -s 127.0.0.1 --port 1433 -d 'TimestampsDb' -u sa -p 'A&VeryComplex123Password' -q 'SELECT * FROM Timestamps' ;

build:
	docker-compose up -d --build ;

clean-containers:
	docker-compose down ; \
	for container in $$(docker ps -a -q); do \
		docker rm -f $$container ; \
	done

clean-images: clean-containers
	docker-compose down --rmi all -v --remove-orphans ; \
	for image in $$(docker images -f "dangling=true" -q); do \
		docker rmi $$image ; \
	done

clean-volume:
	for volume in $$(docker volume ls -q); do \
		docker volume rm $$volume ; \
	done

clean-all: clean-images clean-volume

clean: clean-containers

$(SUBFOLDERS):
	@$(MAKE) -C $@ $(SUBCOMMAND)
