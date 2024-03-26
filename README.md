# Home Library Service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone https://github.com/MaksimGurbanow/nodejs2024Q1-service.git
```

## Installing NPM modules

```
npm install
```

## Get's started

```
docker:up
```
After create and starting the app on port (4000 as default) you can open in your browser OpenAPI documentation by typing
> _http://localhost:4000/doc/_

Also we can work with **postgresql** in manual mode through Prisma studio

```bash
npm docker:studio
```

And open a graphical user interface (GUI) in your browser to work with databases easily

> _http://localhost:5555_

## :test_tube: Testing

After application running open new terminal and enter:

To run all tests without authorization

```bash
npm run test
```

### :pencil2: Auto-fix and Format

```bash
npm run lint
```

```bash
npm run format
```

### :mag_right: Scan Docker containers

You can also run a report on scanning Docker images for vulnerabilities using the docker scout tool. The report is an analysis of two Docker images: nodejs2023q2-service-app and nodejs2023q2-service-db:

```bash
npm docker:scan
```
