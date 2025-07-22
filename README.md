# Ecommerce-APIs

<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
  </a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" />
  </a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank">
    <img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" />
  </a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank">
    <img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" />
  </a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank">
    <img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/>
  </a>
  <a href="https://opencollective.com/nest#backer" target="_blank">
    <img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" />
  </a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank">
    <img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" />
  </a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank">
    <img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/>
  </a>
  <a href="https://opencollective.com/nest#sponsor"  target="_blank">
    <img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us">
  </a>
  <a href="https://twitter.com/nestframework" target="_blank">
    <img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow">
  </a>
</p>

## Description

This repository contains a set of e-commerce APIs built with NestJS, a progressive Node.js framework. It leverages TypeScript for robust and scalable server-side applications.

## Features

- **NestJS Framework**: A powerful framework for building efficient and scalable Node.js server-side applications.
- **TypeScript**: Provides type safety and enhances code quality.
- **Prisma**: A modern database toolkit (ORM) for Node.js and TypeScript, used for database access.
- **Swagger**: For API documentation and interactive testing.

## Technologies Used

- Node.js
- NestJS
- TypeScript
- Prisma (ORM for database interaction)
- Swagger (API documentation)

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd ecommerce-apis

# Install dependencies
npm install
```

### Configure Environment

- Configure your database connection in the `prisma/.env` file or similar configuration.

### Prisma Setup

```bash
# Run Prisma migrations
npx prisma migrate dev
```

## Running the Application

```bash
# Development
npm run start

# Watch mode
npm run start:dev

# Production mode
npm run start:prod
```

## Testing

```bash
# Unit tests
npm run test

# End-to-End tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Project Structure

- `src/`: Main application source code including controllers, services, and modules.
- `prisma/`: Prisma schema and migrations.
- `test/`: Application tests.



## License

This project is licensed under the MIT License.

## Support

Nest is an MIT-licensed open-source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

