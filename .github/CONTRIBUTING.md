# Contributing to EchoNote-AI-Voice-Notes-React-Native-Mobile-App

Thank you for considering contributing to `EchoNote-AI-Voice-Notes-React-Native-Mobile-App`! We aim to maintain a high-quality, professional codebase that reflects FAANG-level standards and the wisdom of "Managing the Unmanageable." This guide outlines the process for contributing.

## 1. Our Guiding Principles

*   **Zero-Defect, High-Velocity, Future-Proof:** Strive for quality, speed, and maintainability. \n*   **Professionalism:** All contributions must adhere to established architectural patterns and coding standards. \n*   **Clarity & Documentation:** Ensure code is well-documented and easily understandable. \n*   **Modularity:** Favor modular design for maintainability and scalability. \n*   **AI Agent Alignment:** All code should be structured to facilitate understanding and integration by AI agents.

## 2. Getting Started

1.  **Fork the Repository:** Create your own fork of the `chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App` repository.
2.  **Clone Your Fork:** `git clone https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App.git`
3.  **Set Upstream Remote:** `git remote add upstream https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App.git`
4.  **Create a New Branch:** Always develop new features or fixes in a dedicated branch. Use a descriptive name (e.g., `feat/add-new-summarization-model`, `fix/improve-ui-responsiveness`).
    bash
    git checkout -b your-branch-name
    
5.  **Install Dependencies:**
    bash
    npm install # or yarn install
    
6.  **Run Development Server:**
    bash
    npm run dev # or yarn dev
    

## 3. Development Workflow

*   **Technology Stack:** React Native (Expo), TypeScript, Tailwind CSS v4, Biome, Vitest, Playwright.
*   **Architecture:** Feature-Sliced Design (FSD) is preferred for frontend structure.
*   **Linting & Formatting:** All code must pass Biome checks. Run `npm run lint` or `yarn lint` to check and `npm run format` or `yarn format` to fix.
*   **Testing:** All new features must include unit tests (Vitest) and, where applicable, end-to-end tests (Playwright). Run `npm run test` or `yarn test`.
*   **Committing:** Write clear, concise commit messages following the Conventional Commits specification (e.g., `feat: Add user authentication`, `fix: Resolve crash on note deletion`).

## 4. Contribution Types

We welcome contributions in various forms:

*   **Bug Reports:** Please check if the bug has already been reported. If not, create a new issue using the `Bug Report` template. Provide detailed steps to reproduce the issue.
*   **Feature Requests:** Propose new features by creating an issue. Clearly articulate the problem it solves and its potential benefits.
*   **Code Contributions:** Submit pull requests for bug fixes, new features, or performance enhancements. Ensure your code adheres to the project's standards and includes adequate tests.

## 5. Pull Request Process

1.  Ensure your branch is up-to-date with the `main` branch: `git pull upstream main`.
2.  Run tests and linters: `npm run lint && npm run test`.
3.  Submit a Pull Request (PR) from your feature branch to the `main` branch of the `chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App` repository.
4.  Your PR will be reviewed by the maintainers. Be prepared to address feedback and make necessary adjustments.
5.  Once approved, your PR will be merged.

## 6. Code of Conduct

This project adheres to a Code of Conduct (derived from the Contributor Covenant, version 2.1). Please read and adhere to it to ensure a welcoming and inclusive environment for all contributors.

*   [Code of Conduct](https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/blob/main/.github/CODE_OF_CONDUCT.md)

## 7. AI Agent Directives

This project is designed with AI agents in mind. Refer to the `AGENTS.md` file for detailed directives on how to interact with and contribute to the codebase using AI assistance. All contributions should be mindful of AI interpretability and maintainability.

## 8. Questions & Support

If you have any questions or need clarification, please open an issue in the repository. We are here to help!
