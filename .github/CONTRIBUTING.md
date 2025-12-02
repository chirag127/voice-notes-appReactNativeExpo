# 🚀 Contributing to EchoNote-AI-Voice-Notes-React-Native-Mobile-App

Thank you for considering contributing to EchoNote! We welcome your input to make this AI-powered voice notes app even better. This guide outlines the process for contributing, ensuring consistency and quality across the project.

## 1. Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. Please read the [Code of Conduct](https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/blob/main/CODE_OF_CONDUCT.md) to understand our expectations for community participation.

## 2. How to Contribute

### 2.1 Reporting Bugs

If you find a bug, please check if it has already been reported. If not, open a new issue using the **Bug Report** template. Provide as much detail as possible, including:

*   A clear, descriptive title.
*   Steps to reproduce the bug.
*   Your environment (OS, device, React Native version, Expo version).
*   Screenshots or screen recordings if applicable.
*   Relevant error messages.

### 2.2 Feature Requests & Suggestions

For new feature ideas or suggestions, please open a new issue using the **Feature Request** template. Clearly explain the proposed feature and its benefits.

### 2.3 Submitting Code Changes (Pull Requests)

We encourage you to submit your contributions via Pull Requests (PRs). Here's the recommended workflow:

1.  **Fork the Repository:** Create your own fork of the `chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App` repository.
2.  **Clone Your Fork:** Clone your forked repository to your local machine:
    bash
    git clone https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App.git
    cd EchoNote-AI-Voice-Notes-React-Native-Mobile-App
    
3.  **Create a New Branch:** Create a descriptive branch for your changes:
    bash
    git checkout -b feature/your-feature-name
    # or
    git checkout -b bugfix/your-bug-fix
    
4.  **Make Your Changes:** Implement your feature or fix. Follow the project's coding standards and architectural guidelines.
5.  **Test Your Changes:** Ensure your changes are thoroughly tested. Run the provided test suites.
6.  **Lint and Format:** Ensure your code adheres to the project's linting and formatting rules.
    bash
    # Example commands (adjust based on actual project setup)
    npx expo lint --fix
    npx biome format --write .
    
7.  **Commit Your Changes:** Commit your changes with clear and concise commit messages.
    bash
    git add .
    git commit -m "feat: Add voice recording functionality"
    
8.  **Push to Your Fork:** Push your branch to your fork on GitHub:
    bash
    git push origin feature/your-feature-name
    
9.  **Open a Pull Request:** Navigate to the original repository (`chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App`) and open a new Pull Request from your branch.

### 2.4 Pull Request Checklist

Before submitting a PR, please ensure:

*   [ ] Your code follows the project's coding style and standards.
*   [ ] You have added relevant unit or integration tests.
*   [ ] All new and existing tests pass.
*   [ ] You have updated the documentation if necessary.
*   [ ] Your branch is up-to-date with the latest `main` branch.

## 3. Development Environment Setup

Refer to the `README.md` for detailed instructions on setting up the development environment. This typically involves:

*   Cloning the repository.
*   Installing dependencies using `npm` or `yarn`.
*   Setting up Expo Go or simulator/emulator.

## 4. Architectural Guidelines

This project follows modern best practices for React Native and Expo development:

*   **TypeScript:** Strict TypeScript is enforced for type safety.
*   **Expo SDK:** Leveraging the latest stable Expo SDK for streamlined development and native module management.
*   **State Management:** (Specify if a particular state management library is used, e.g., Zustand, Redux Toolkit, Context API)
*   **Styling:** (Specify styling approach, e.g., Styled Components, Tailwind CSS with NativeWind, StyleSheet)
*   **AI Integration:** For AI features, ensure modularity, clear API contracts with backend services or direct SDK usage, and robust error handling.
*   **SOLID Principles:** Strive to adhere to SOLID principles in your code design.
*   **DRY (Don't Repeat Yourself):** Avoid code duplication.

## 5. Testing

Automated testing is crucial. We use:

*   **Vitest:** For unit and integration testing of components and utility functions.
*   **Playwright (or similar E2E testing framework):** For end-to-end testing of user flows on simulators or real devices.

Run tests using:

bash
npx vitest
# or for E2E tests, consult specific setup


## 6. Submitting Your Contributions

All contributions are welcome! We aim for a smooth and efficient review process. Please be patient as we review your PR. We may ask for modifications to ensure adherence to project standards.

**Thank you for contributing to EchoNote!**
