# Simple Backend

This is a basic backend project, primarily designed for testing purposes. Please note that much of the codebase is **not suitable for production use**. If you're looking for a production-ready backend, consider other alternatives or ensure that you refactor and test the code thoroughly before deploying.

## Notes
This backend is for testing purposes only. It's crucial to understand that it's not optimized or secured for production use.

I will not be using any boilerplate and I will be limiting my use on third-party wrappers. Instead, opting to create my own.

## Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed.
- This project uses the `yarn` package manager. If you don't have it installed, you can get it [here](https://classic.yarnpkg.com/en/docs/install/).

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dantekelly/simple-backend.git
   cd simple-backend
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Run the server in development mode:**

   ```bash
   yarn dev
   ```

   This will start the server on port `5050`.

## Available Scripts

- **Test the server:**

  ```bash
  yarn test
  ```

- **Build the server:**

  ```bash
  yarn build
  ```

## Important Notes

- The server runs on port `5050`. Ensure that this port is available on your machine or modify the configuration to use a different port.

## Contributing

If you find any issues or areas of improvement, feel free to open an issue or submit a pull request. Any contributions are welcome!

## Todo
- [ ] Create a basic REST API
- [ ] Integrate with PlanetScale MySQL database
- [ ] Integrate TMDB API for data collection
- [ ] Add basic CRUD operations
- [ ] Add basic GraphQL API
- [ ] Add real-time subscriptions
- [ ] Add rate-limiting with Redis
- [ ] Add authentication
- [ ] Add redis caching
- [ ] Add logging
- [ ] Add CI/CD
- [ ] Add Dockerfile/Docker Compose file
- [ ] Add Chaos Tests