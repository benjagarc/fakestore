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
