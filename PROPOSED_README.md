# EchoNote: AI-Powered Voice Notes Mobile App


![EchoNote Hero Banner](https://placehold.co/1280x320/0f172a/a3e635/png?text=EchoNote&font=raleway)


<p align="center">
    <a href="https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/actions/workflows/ci.yml">
        <img src="https://img.shields.io/github/actions/workflow/status/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/ci.yml?branch=main&style=flat-square&logo=githubactions&logoColor=white" alt="Build Status">
    </a>
    <a href="https://codecov.io/gh/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App">
        <img src="https://img.shields.io/codecov/c/github/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App?style=flat-square&logo=codecov&logoColor=white" alt="Code Coverage">
    </a>
    <img src="https://img.shields.io/badge/React%20Native-61DAFB?style=flat-square&logo=react&logoColor=black" alt="Tech Stack - React Native">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="Tech Stack - TypeScript">
    <img src="https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white" alt="Tech Stack - Expo">
    <img src="https://img.shields.io/badge/lint-Biome-blue?style=flat-square&logo=biome" alt="Linter - Biome">
    <a href="https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey?style=flat-square" alt="License">
    </a>
    <a href="https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/stargazers">
        <img src="https://img.shields.io/github/stars/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App?style=flat-square&logo=github" alt="GitHub Stars">
    </a>
</p>

<p align="center">
    <a href="https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/fork" target="_blank"><strong>Fork the Project 🍴</strong></a>
    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/stargazers" target="_blank"><strong>Star the Repo ⭐</strong></a>
    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/issues/new/choose" target="_blank"><strong>Report a Bug 🐞</strong></a>
</p>

---

EchoNote is a cutting-edge, AI-powered voice notes application built with React Native and Expo. It transforms your mobile device into an intelligent productivity companion, allowing you to seamlessly record, transcribe, and organize your thoughts with powerful AI-driven summarization and tagging.

## 📋 Table of Contents

- [✨ Core Features](#-core-features)
- [🏗️ System Architecture](#️-system-architecture)
- [🤖 AI Agent Directives](#-ai-agent-directives)
- [🚀 Getting Started](#-getting-started)
- [🛠️ Available Scripts](#️-available-scripts)
- [🤝 Contributing](#-contributing)
- [⚖️ License](#️-license)

## ✨ Core Features

- **One-Tap Recording:** Instantly capture voice memos with a high-quality audio recorder.
- **AI-Powered Transcription:** Leverage state-of-the-art Speech-to-Text models for highly accurate, near-instant transcriptions.
- **Intelligent Summarization:** Automatically generate concise summaries of long recordings to capture key insights.
- **Smart Tagging:** AI analyzes transcript content to suggest relevant tags for effortless organization.
- **Cross-Platform:** Built with React Native & Expo for a consistent experience on both iOS and Android.
- **Offline First (Planned):** Designed to work seamlessly even without a constant internet connection.

## 🏗️ System Architecture

This project follows the **Feature-Sliced Design (FSD)** methodology to ensure maximum scalability, maintainability, and a clear separation of concerns. The structure is organized by business domain and feature scope, rather than technical type.

sh
src/
├── app/                # App-level config, providers, and entry point
│   ├── providers/      # (Routing, Theme, State Management)
│   └── index.tsx       # (Root component)
├── processes/          # Multi-screen business workflows (e.g., onboarding)
├── pages/              # Screen components, composed of features and entities
│   ├── home/
│   ├── note-details/
│   └── settings/
├── features/           # Slices of business logic (e.g., audio recording)
│   ├── note-transcription/
│   ├── audio-recording/
│   └── ai-summarization/
├── entities/           # Business entities (e.g., Note data model, UI cards)
│   └── note/
│       ├── model/
│       └── ui/
└── shared/             # Reusable, framework-agnostic code
    ├── api/            # API clients and type definitions
    ├── config/         # Global constants, environment variables
    ├── lib/            # Helper functions and hooks
    └── ui/             # Generic UI Kit (Button, Input, Card, etc.)


## 🤖 AI Agent Directives

<details>
<summary><strong>Expand for AI Agent Operational Directives (December 2025 Standard)</strong></summary>

### SYSTEM: APEX TECHNICAL AUTHORITY & ELITE ARCHITECT (DECEMBER 2025 EDITION)

#### 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards and the wisdom of "Managing the Unmanageable."
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

---

#### 2. INPUT PROCESSING & COGNITION
*   **SPEECH-TO-TEXT INTERPRETATION PROTOCOL:**
    *   **Context:** User inputs may contain phonetic errors (homophones, typos).
    *   **Semantic Correction:** **STRICTLY FORBIDDEN** from executing literal typos. You must **INFER** technical intent based on the project context.
    *   **Logic Anchor:** Treat this `README.md` as the **Single Source of Truth (SSOT)**.
*   **MANDATORY MCP INSTRUMENTATION:**
    *   **No Guessing:** Do not hallucinate APIs or component properties.
    *   **Research First:** Use `linkup`/`brave` to search for **December 2025 Industry Standards**, **React Native Best Practices**, and **2026 Mobile UI Trends**.
    *   **Validation:** Use `docfork` to verify *every* external API signature (e.g., transcription service, state manager).
    *   **Reasoning:** Engage `clear-thought-two` to architect complex component flows and state interactions *before* writing code.

---

#### 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
**Directives:** This repository, `EchoNote-AI-Voice-Notes-React-Native-Mobile-App`, is a mobile application. Apply the corresponding **Apex Toolchain**.

*   **PRIMARY SCENARIO: MOBILE APP / WEB (TypeScript)**
    *   **Stack:** This project leverages **React Native** with the **Expo SDK** and **TypeScript 6.x (Strict)**. All new code must be strictly typed.
    *   **Architecture:** Adheres to **Feature-Sliced Design (FSD)**. This is non-negotiable for maintaining scalability and developer sanity. Reference the architecture diagram in this README.
    *   **State Management:** Utilize **Zustand** for global state management due to its simplicity, minimal boilerplate, and hook-based API. Avoid Redux Toolkit unless absolutely necessary for complex, multi-step state transitions.
    *   **Linting & Formatting:** **Biome** is the unified toolchain for this repository. Enforce all linting rules and formatting on commit via husky pre-commit hooks. The command is `npx biome check --apply ./src`.
    *   **Testing:** Employ **Vitest** and **React Native Testing Library** for unit and component testing. For End-to-End (E2E) testing, use a framework like **Maestro** or **Playwright** for robust cross-platform validation.
    *   **AI Integration:** AI features (transcription, summarization) are handled via secure, authenticated REST API calls to cloud services (e.g., Google Gemini, OpenAI Whisper). All API clients must be located in `src/shared/api/` and include robust error handling, retries, and request cancellation logic.

</details>

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (LTS version)
- npm or yarn
- Expo Go app on your physical device or an emulator/simulator
- Expo CLI: `npm install -g expo-cli`

### Installation

1.  **Clone the repository:**
    bash
    git clone https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App.git
    cd EchoNote-AI-Voice-Notes-React-Native-Mobile-App
    

2.  **Install dependencies:**
    bash
    npm install
    

3.  **Start the development server:**
    bash
    npm start
    
    Scan the QR code with the Expo Go app to launch the application.

## 🛠️ Available Scripts

| Script          | Description                                               |
| --------------- | --------------------------------------------------------- |
| `npm start`     | Starts the Metro bundler and Expo development server.     |
| `npm run android` | Runs the app on a connected Android device or emulator.   |
| `npm run ios`     | Runs the app on an iOS simulator.                         |
| `npm run web`     | Runs the app in a web browser.                            |
| `npm test`      | Executes tests using Vitest.                              |
| `npm run lint`    | Lints and formats the codebase with Biome.                |

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please read our [CONTRIBUTING.md](.github/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## ⚖️ License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**. See the [LICENSE](LICENSE) file for more details.
