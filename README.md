
# Electron-React-Vite Template

This is a project template for creating desktop applications using Electron, React, and Vite with TypeScript. It provides a modern development environment with hot-reloading for both the main and renderer processes, making it easier to build, test, and deploy Electron applications.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Development Workflow](#development-workflow)
- [Building for Production](#building-for-production)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Electron**: Build cross-platform desktop apps using web technologies.
- **React**: Build user interfaces with a component-based architecture.
- **Vite**: Fast and optimized build tool for modern web projects.
- **TypeScript**: Type-safe development for both Electron and React.
- **Hot Reloading**: Live reloading for both main and renderer processes using `electronmon` and Vite.
- **Modern Setup**: Utilizes `concurrently` for running multiple scripts, and `cross-env` for setting environment variables across different platforms.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abdoseadaa/electron-react-vite-template.git
   cd electron-react-vite-template
   ```

2. **Install dependencies:**

   ```bash
   npm install
   cd frontend && npm install
   ```

   This installs dependencies for both the main project and the frontend React application.

## Project Structure

```
electron-react-vite-template/
|-- .vscode/              # VSCode configuration (optional)
|-- dist/                 # Build output for Electron main process
|-- frontend/             # React frontend application (Vite project)
|   |-- node_modules/     # Node modules for frontend
|   |-- public/           # Public assets for frontend
|   |-- src/              # Source code for frontend
|   |-- package.json      # Package file for frontend
|-- node_modules/         # Node modules for Electron main process
|-- src/                  # Source code for Electron main process
|   |-- main/             # Main process files (e.g., main.ts)
|-- package.json          # Main package file
|-- tsconfig.json         # TypeScript configuration for Electron
|-- .gitignore            # Git ignore file
|-- README.md             # This README file
```

## Scripts

- **`npm start`**: Builds the project for production and starts the Electron app.
- **`npm run dev`**: Starts the development environment with hot-reloading for both main and renderer processes.
- **`npm run build`**: Builds both the main process and the renderer process for production.
- **`npm run build:main`**: Builds the Electron main process using TypeScript.
- **`npm run build:renderer`**: Builds the React frontend using Vite.
- **`npm run dev:main`**: Runs the Electron main process in development mode with hot-reloading.
- **`npm run dev:renderer`**: Runs the Vite development server for the frontend.

## Development Workflow

1. **Start the development environment:**

   ```bash
   npm run dev
   ```

   This will start both the Electron main process and the Vite development server with hot-reloading enabled.

2. **Make changes** to the main process files in the `src/main/` directory or React components in the `frontend/src/` directory. Changes will be reflected automatically.

3. **Build for production**:

   ```bash
   npm run build
   ```

   This command compiles the TypeScript files and builds the React application for production.

## Building for Production

1. **Run the build command**:

   ```bash
   npm run build
   ```

   This compiles the TypeScript and bundles the React app into the `dist` directory, making it ready for packaging with Electron.

2. **Package the Electron app** (optional):

   Use tools like `electron-builder` or `electron-packager` to package your application into distributable formats for different operating systems.

## Technologies Used

This template leverages a modern stack of technologies to provide a robust, efficient, and scalable development environment for building cross-platform desktop applications:

- **React**: A JavaScript library for building user interfaces, enabling the creation of dynamic and responsive UI components.
- **TypeScript**: A typed superset of JavaScript that provides static type-checking, improving code quality and maintainability.
- **Vite**: A next-generation frontend tooling that offers instant server start, lightning-fast HMR (Hot Module Replacement), and optimized builds.
- **Electron**: A framework for building cross-platform desktop applications using web technologies, combining Chromium and Node.js.
- **Tailwind CSS**: A utility-first CSS framework that allows rapid UI development with predefined classes, leading to consistent and responsive designs.
- **ShadCN/UI**: A component library that integrates with Tailwind CSS, providing accessible, customizable, and reusable UI components.
- **Hot Reloading**: Using `electronmon` for the Electron main process and Vite's HMR for the React frontend, ensuring that changes are reflected instantly without restarting the application.
- **Concurrently**: A tool to run multiple scripts simultaneously, streamlining the development process by handling both main and renderer process scripts.
- **Cross-Env**: A utility for setting environment variables across different platforms, ensuring consistent behavior in various environments.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
