This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, you need to configure the environment variables for the project:

1.  **Create a `.env.local` file** in the root directory of your project if it doesn't already exist.
2.  **Add the following variable** to your `.env.local` file:

    ```
    API_URL=[https://fakestoreapi.com](https://fakestoreapi.com)
    ```

    This variable specifies the base URL for the Fake Store API that the application will use.

After configuring the environment variables, you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Tests

This project uses **Jest** as the test runner and **React Testing Library** for testing React components.

To run the tests, use one of the following commands in your terminal (make sure the development server is NOT running simultaneously on the same terminal window):

```bash
npm test
# or
yarn test
# or
pnpm test
# or
bun test
```
