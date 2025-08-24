# Nairobi Online College - Next.js Application

This is the Next.js application for Nairobi Online College, built using Firebase Studio. It's inspired by the legacy of Nairobi College of East Palo Alto, aiming to provide a modern, accessible, and community-focused online learning experience.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration:** [Genkit (by Google)](https://firebase.google.com/docs/genkit)
- **Deployment:** Firebase App Hosting (configured via `apphosting.yaml`)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

### Running the Development Server

To start the Next.js development server:

```bash
npm run dev
```
Or if you use yarn:
```bash
yarn dev
```

Open [http://localhost:9002](http://localhost:9002) (or the port specified in your `dev` script in `package.json`) with your browser to see the result.

The page will auto-update as you edit files.

### Running Genkit Development Server (for AI features)

If you are working on AI features powered by Genkit, you'll need to run the Genkit development server in a separate terminal:

```bash
npm run genkit:dev
```
Or for watching changes:
```bash
npm run genkit:watch
```
This typically starts on `http://localhost:4000`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```
Or using yarn:
```bash
yarn build
```

This command builds the application for production usage and outputs it to the `.next` folder.

### Starting the Production Server (Locally)

After building, you can start a local production server with:

```bash
npm run start
```
Or using yarn:
```bash
yarn start
```

## Learn More

- To learn more about Next.js, take a look at the [Next.js Documentation](https://nextjs.org/docs).
- To learn more about ShadCN UI, visit the [ShadCN UI Documentation](https://ui.shadcn.com/docs).
- To learn more about Genkit, check out the [Genkit Documentation](https://firebase.google.com/docs/genkit).

## Project Structure (Key Directories)

-   `src/app/`: Contains the main application routes (App Router).
-   `src/components/`: Shared React components.
    -   `src/components/ui/`: ShadCN UI components.
    -   `src/components/layout/`: Layout components like Header, Footer, PageWrapper.
-   `src/lib/`: Utility functions, data, etc.
-   `src/ai/`: Genkit related code.
    -   `src/ai/flows/`: Genkit flows.
-   `public/`: Static assets.
-   `tailwind.config.ts`: Tailwind CSS configuration.
-   `next.config.ts`: Next.js configuration.

## Contributing

This is primarily a Firebase Studio project. For contributions, please discuss with the project maintainers.
