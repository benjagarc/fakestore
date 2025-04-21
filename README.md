## Getting Started

To get started with the project locally, please follow these steps:

1.  **Configure Environment Variables:**

    - Create a `.env.local` file in the root directory of your project if it doesn't already exist.
    - Add the following variable to your `.env.local` file:

      ```
      API_URL=https://fakestoreapi.com
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

## Local Storage Usage

This project utilizes Local Storage to persist product data across sessions. Two custom functions have been implemented for this purpose:

- **`getStoredProducts()`:** This function is used to retrieve any previously stored product data from Local Storage when the application initializes or when needed. It allows the application to load existing product information, maintaining the user's state across visits.

- **`saveInitialProducts()`:** This function is used to save a set of initial product data to Local Storage. This is typically called when the application first loads or when a fresh set of products needs to be persisted. It ensures that product data is stored locally for subsequent use.

These functions help in providing a persistent experience for users, allowing them to retain product-related information even after closing and reopening the browser. You can find the implementation of these functions within the project's codebase, likely in a utility or state management related file.

## State Management

This application employs the `useReducer` hook for managing its state. The following actions are utilized to update the application's state:

- **`"ADD"`:** This action is dispatched to add new items or data to the application's state. The payload of this action typically includes the data to be added.

- **`"UPDATE"`:** This action is used to modify existing items or data within the application's state. The payload usually contains the identifier of the item to be updated and the new data.

- **`"SET"`:** This action is dispatched to set or replace a specific part of the application's state with new data. This is often used for initializing state or loading data in bulk.

- **`"DELETE"`:** This action is used to remove items or data from the application's state. The payload typically includes the identifier of the item to be deleted.

By using these actions with `useReducer`, the application provides a predictable and centralized way to manage its data flow and state changes, making it easier to understand and maintain the application's behavior. You can find the implementation of the reducer function and these actions within the project's state management related files or React components.

## 🌐 Demo

This project is deployed on Netlify.
You can check out the live demo here:
👉 https://bg-fakestore.netlify.app/
