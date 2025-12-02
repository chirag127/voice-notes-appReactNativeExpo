# 🎵 EchoNote-AI-Voice-Notes-React-Native-Mobile-App

[![Build Status](https://img.shields.io/github/actions/workflow/status/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/ci.yml?style=flat-square)](https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/actions/workflows/ci.yml)
[![Code Coverage](https://img.shields.io/codecov/c/github/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App?style=flat-square)](https://codecov.io/github/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App)
[![Language](https://img.shields.io/github/languages/top/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App?style=flat-square&color=blue)](https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App)
[![License](https://img.shields.io/github/license/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App?style=social)](https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App)

<p align="center">
  <a href="https://stars.github.com/users/chirag127/" target="_blank">
    <img src="https://img.shields.io/github/stars/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App?style=social&label=Star+This+Repo" alt="Star This Repo"/>
  </a>
</p>

EchoNote redefines mobile productivity by transforming spoken words into structured, actionable insights using advanced cloud AI services. Seamlessly record, transcribe, and organize complex audio thoughts into tagged, summarized notes directly on your device.

This repository houses the complete, production-ready codebase for a cutting-edge mobile application developed using the modern React Native/Expo ecosystem.

---

## 🏗️ Architecture Overview

This mobile application adheres to the **Feature-Sliced Design (FSD)** pattern for scalable state management and component isolation, ensuring maintainability across complex features like real-time audio processing and remote AI summarization.

mermaid
graph TD
    A[Start Recording] --> B{Audio Buffer};
    B --> C[Local Processing / Pre-processing];
    C --> D[Cloud Speech-to-Text API];
    D --> E[Raw Transcription Text];
    E --> F{AI Analysis Engine (e.g., Gemini)};
    F -- Summarization/Tagging --> G[Structured Note Object];
    G --> H[Local Persistence (AsyncStorage/Realm)];
    H --> I[UI Render: Notes List / Detail View];
    I -- User Interaction --> A;

    subgraph Mobile Stack
        C & I
    end
    subgraph Cloud Services
        D & F
    end


## 🧭 Table of Contents

1.  [🎵 EchoNote-AI-Voice-Notes-React-Native-Mobile-App](#-echonote-ai-voice-notes-react-native-mobile-app)
2.  [🏗️ Architecture Overview](#-architecture-overview)
3.  [🧭 Table of Contents](#-table-of-contents)
4.  [✨ Key Features](#-key-features)
5.  [🛠️ Technology Stack (The Apex Toolchain)](#-technology-stack-the-apex-toolchain)
6.  [🤖 AI Agent Directives (APEX STANDARDS)](#-ai-agent-directives-apex-standards)
7.  [🚀 Development & Setup](#-development--setup)
8.  [🤝 Contribution Guidelines](#-contribution-guidelines)
9.  [⚖️ License](#-license)

## ✨ Key Features

*   **Real-Time Voice Capture:** High-fidelity audio recording leveraging native device capabilities via Expo modules.
*   **Intelligent Transcription:** Integration with leading STT providers for industry-leading accuracy.
*   **AI Summarization:** Utilizes LLMs to condense long recordings into key bullet points and action items.
*   **Automatic Tagging:** AI-driven topic extraction to auto-categorize notes for quick retrieval.
*   **Offline Caching:** Ensures core note viewing and basic functionality remains available offline.
*   **Secure Persistence:** Utilizing robust local storage solutions compliant with mobile best practices.

## 🛠️ Technology Stack (The Apex Toolchain)

This project is engineered using the **LATE 2025/2026 APEX Standards** for mobile application development:

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Platform** | React Native (w/ Expo) | Maximum cross-platform reach and rapid iteration. |
| **Language** | TypeScript (Strict Mode) | Enforced type safety and reduced runtime errors. |
| **Styling** | TailwindCSS (via Nativewind) | Utility-first styling for responsive, consistent UI. |
| **State Mgmt** | Zustand / React Context | Lightweight, fast, and scalable state primitives. |
| **Architecture** | Feature-Sliced Design (FSD) | Strict module boundaries for long-term maintainability. |
| **Testing** | Vitest / Playwright | Unit testing via Vitest; E2E testing via Playwright integration. |
| **Build Tool** | Vite 7 | Blazing fast bundling and development server. |

## 🤖 AI Agent Directives (APEX STANDARDS)

<details>
<summary>Click to Expand: APEX TECHNICAL AUTHORITY Directives for this Repository</summary>

# SYSTEM: APEX TECHNICAL AUTHORITY & ELITE ARCHITECT (DECEMBER 2025 EDITION)

## 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards and the wisdom of "Managing the Unmanageable."
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

--- 

## 2. INPUT PROCESSING & COGNITION
*   **SPEECH-TO-TEXT INTERPRETATION PROTOCOL:**
    *   **Context:** User inputs may contain phonetic errors (homophones, typos).
    *   **Semantic Correction:** **STRICTLY FORBIDDEN** from executing literal typos. You must **INFER** technical intent based on the project context.
    *   **Logic Anchor:** Treat the `README.md` as the **Single Source of Truth (SSOT)**.
*   **MANDATORY MCP INSTRUMENTATION:**
    *   **No Guessing:** Do not hallucinate APIs. Focus strictly on React Native/Expo APIs for mobile interaction and known cloud SDKs (e.g., Google/Azure for AI).
    *   **Research First:** Use `linkup`/`brave` to search for **December 2025 Industry Standards** in React Native performance, native module integration, and mobile security (iOS/Android sandboxing).
    *   **Validation:** Use `docfork` to verify *every* React Native/Expo API signature, especially audio/microphone permissions.
    *   **Reasoning:** Engage `clear-thought-two` to architect complex flows *before* writing code, focusing heavily on async handling for I/O bound tasks (Audio Recording & Cloud API calls).

--- 

## 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
**Directives:** This repository is a **Mobile Application**.

*   **PRIMARY SCENARIO: WEB / APP / GUI (Modern Frontend/Mobile)**
    *   **Stack:** **TypeScript 6.x** (Strict), **Vite 7** (as bundler), **NativeWind** (for TailwindCSS implementation on RN), **Playwright** (for E2E testing across device simulators).
    *   **Architecture:** Enforce **Feature-Sliced Design (FSD)**. Components must be strictly separated into `shared`, `entities`, `features`, and `pages` layers.
    *   **Lint/Test:** **Biome** (for JS/TS linting/formatting) + **Vitest** (Unit) + **Playwright** (E2E).
    *   **State:** Utilize **Zustand** for global state, adhering to the principle of **Colocation** where possible.
    *   **AI Integration Focus:** Prioritize efficient handling of large audio blobs before transmission; implement local optimistic UI updates while awaiting cloud transcription results.

## 4. ARCHITECTURAL MANDATES
*   **SOLID Principles:** Must be strictly applied, especially Single Responsibility (SR) when dealing with audio I/O vs. AI business logic.
*   **DRY Principle:** Avoid duplicating UI logic, utilize shared components heavily.
*   **YAGNI:** Only implement features explicitly requested or required for the core MVP (Record, Transcribe, Summarize).

## 5. VERIFICATION COMMANDS (Development Cycle)
*   **LINT & FORMAT (Biome Check):** `npx @biomejs/biome check --apply --apply-unsafe .`
*   **UNIT TESTS (Vitest):** `npm test` (or `npx vitest`)
*   **E2E TESTS (Playwright):** `npx playwright test`
*   **START DEVELOPMENT SERVER:** `npx expo start`

</details>

## 🚀 Development & Setup

Follow these steps to establish the development environment according to 2026 standards.

### Prerequisites
Ensure you have Node.js (v20+), npm/yarn/pnpm, Expo CLI, and necessary native development environments (Android Studio/Xcode) installed.

### Installation

bash
# 1. Clone the repository
git clone https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App.git
cd EchoNote-AI-Voice-Notes-React-Native-Mobile-App

# 2. Use uv-equivalent for JS dependency resolution (npm/pnpm/yarn are standard in RN)
pnpm install 
# or npm install / yarn install

# 3. Configure Environment Variables (e.g., API Keys)
# Create a .env file in the root directory and populate required keys (e.g., STT_API_KEY, AI_SERVICE_URL)
cp .env.example .env

# 4. Run the application
npx expo start


### Scripts Reference

| Command | Description |
| :--- | :--- |
| `pnpm start` | Starts the Expo development server. |
| `pnpm test` | Runs all Vitest unit and component tests. |
| `pnpm lint:fix` | Formats and lints codebase using Biome. |
| `pnpm e2e:run` | Executes end-to-end tests via Playwright. |
| `pnpm build:ios` | Creates an optimized production build for iOS. |

## 🤝 Contribution Guidelines

We adhere to a strict Quality Gate process. All contributions must pass automated checks and be reviewed against the FSD architecture principles. Please consult the dedicated contribution file for full details.

See [CONTRIBUTING.md](./.github/CONTRIBUTING.md) for details on submitting pull requests.

## 🛡️ Security

Security vulnerabilities are treated with the highest priority. Please refer to our security policy for responsible disclosure.

See [.github/SECURITY.md](./.github/SECURITY.md) for details.

## ⚖️ License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**.

See the [LICENSE](./LICENSE) file for full details.
