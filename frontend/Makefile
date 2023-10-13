# Makefile

# Variables
image_name = frontend-react
image_tag = latest

.PHONY: docker_build
docker_build:
	docker build -t $(image_name):$(image_tag) .

.PHONY: docker_run
docker_run:
	docker run -d -p 3000:3000 --rm $(image_name):$(image_tag)

.PHONY: docker_rm
docker_rm:
	docker ps -a -q --filter="ancestor=$(image_name):$(image_tag)" | xargs -I {} docker rm -f {}

.PHONY: docker_rmi
docker_rmi:
	docker images -q $(image_name):$(image_tag) | xargs -I {} docker rmi {}

.PHONY: clean
clean: docker_rm docker_rmi