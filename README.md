

<p align="center">
  <img src="assets/images/logo-no-background.svg" width="700" alt="Nest Logo" /></a>
</p>

<p style="padding: 25px;">

# Used Car API
## Description
The Used Car API is a simple demonstration project built with NestJS. This project showcases the use of modules and dependency injection in a NestJS application by providing a basic API for managing user authentication and car sales reports.

## Features:
* **User Authentication**: Users can sign up for an account and sign in to access the API.
* **Report Car Sales**: Authenticated users can submit reports detailing car sales, including information such as make, model, year, mileage, location, and price.
* **Admin Review**: Submitted reports are reviewed by an admin. Once approved, the report is persisted in the database.
* **Data Persistence**: Approved reports are stored in the database for future reference.

## API Endpoints:
* POST /auth/signup
    * Description: Create a new user account and sign in.
    * Body: `{ email, password }`
* POST /auth/signin
    * Description: Sign in as an existing user.
    * Body: `{ email, password }``
* GET /reports
    * Description: Get an estimate for the value of a car based on query parameters.
    * Query Parameters: `make, model, year, mileage, longitude, latitude`
* POST /reports
    * Description: Submit a report on how much a vehicle was sold for.
    * Body: `{ make, model, year, mileage, longitude, latitude, price }`
* PATCH /reports/
    * Description: Approve or reject a report submitted by a user (admin only).
    * Body: `{ approved }`

## Technical Overview:
This project is organized into several modules, each responsible for a specific aspect of the application:

* Auth Module: Handles user authentication (sign-up and sign-in).
* Reports Module: Manages the creation, retrieval, and approval of car sales reports.
* Admin Module: Provides functionality for reviewing and approving user-submitted reports.

Each module is self-contained, promoting a modular architecture and enabling easy scaling and maintenance.

## Stack 

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Clone the repo

```bash
$ git clone git@github.com:TheGreatJordach/used-car-pricing-api.git
```

## Install dependencies

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Connect with me on LinkedIn](https://www.linkedin.com/in/jordachmakaya/)
- View   - [my Credly profile](https://www.credly.com/users/jordach-makaya)

## License

Nest is [MIT licensed](LICENSE).


</p>
