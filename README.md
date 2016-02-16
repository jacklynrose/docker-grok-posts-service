# Posts Service

## Docker setup

After installer docker, docker-machine, and docker-compose you need to create a new docker machine.

```console
docker-machine create -d virtualbox myblog
```

## Docker scripts

1. `./bin/build` - takes one argument, the version number, and then prepares your codebase, and then subsequently builds the container image, making a tag for the version and moving the `latest` tag to that version
2. `./bin/test` - run `npm run test` in a temporary docker container
3. `./bin/start` - run's the Dockerfile's command, not useful inside virtualbox though, see the next option

## Docker Compose

The `docker-compose.yml` is very basic and is esentially just there to do the port mapping for virtualbox and docker machine.

```console
docker-compose up
curl http://docker.machine.ip:8080/
#=> {"status":"ok"}
```
