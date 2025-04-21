## Getting Started

To get started with the project locally, please follow these steps:

1.  **Configure Environment Variables:**

    - Create a `.env.local` file in the root directory of your project if it doesn't already exist.
    - Add the following variable to your `.env.local` file:

      ```
      API_URL=[https://fakestoreapi.com](https://fakestoreapi.com)
      ```

      This variable specifies the base URL for the Fake Store API that the application will use.

2.  **Install Dependencies:**
    Navigate to the project directory in your terminal and run **one** of the following commands, depending on your preferred package manager:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install

    ```

3.  **Run the Development Server:**
    Once the dependencies are installed, you can start the development server using one of these commands:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4.  **Open in Browser:**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

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
