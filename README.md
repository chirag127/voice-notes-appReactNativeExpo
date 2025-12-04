# 🎙️ EchoNote-AI-Voice-Notes-React-Native-Mobile-App

[![Build Status](https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/actions/workflows/ci.yml/badge.svg)](https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/actions/workflows/ci.yml)
[![Code Coverage](https://codecov.io/gh/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/branch/main/graph/badge.svg)](https://codecov.io/gh/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App)
[![Language](https://img.shields.io/badge/Language-TypeScript-blue.svg?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framework](https://img.shields.io/badge/Framework-React%20Native%20Expo-68A0CF.svg?style=flat-square&logo=react&logoColor=white)](https://docs.expo.dev/)
[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-blue.svg?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App?style=flat-square&logo=github)](https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App/stargazers)

⭐ Star this Repo if you find it valuable! ⭐

---

**EchoNote** is a cutting-edge mobile productivity application built with React Native and Expo that transforms on-the-go voice recordings into structured, actionable knowledge. It utilizes advanced AI services for real-time transcription, intelligent summarization, and automatic context-based tagging.

This project represents a fusion of mobile development excellence and applied machine learning, adhering strictly to the architectural mandates set by the Apex Technical Authority.

## 🚀 Architecture Overview

The application follows a structured, component-based architecture inspired by Feature-Sliced Design principles adapted for React Native/Expo. The core logic separates concerns into State, Domain, Data, and Presentation layers for maximum maintainability and scalability.

ascii
              EchoNote Mobile App (React Native/Expo)
                            |
         +------------------+------------------+
         |      Presentation Layer (UI/UX)    |
         | (Components, Screens, Navigation)  |
         +------------------+------------------+
                            |
         +------------------+------------------+
         |        Domain Layer (Business Logic) |
         | (State Management, Business Rules)   |
         +------------------+------------------+
                            |
         +------------------+------------------+
         |         Data Layer (Adapters)       |
         | (API Clients: Transcription/AI, DB) |
         +------------------+------------------+
                            |
         +------------------+------------------+
         |          Infrastructure (Expo SDK)  |
         +------------------------------------+


## 📋 Table of Contents

1.  [🚀 Architecture Overview](#-architecture-overview)
2.  [📋 Table of Contents](#-%EF%B8%8F-table-of-contents)
3.  [💡 Key Features](#-%EF%B8%9F-key-features)
4.  [🤖 AI Agent Directives (APEX Protocol)](#-%F0%9F%A7%90-ai-agent-directives-apex-protocol)
5.  [🛠️ Development & Setup](#-%EF%B8%8F-development--setup)
6.  [📜 Compliance & Licensing](#-%F0%9F%93%9C-compliance--licensing)

## 💡 Key Features

*   **Seamless Voice Recording:** High-fidelity audio capture managed via Expo APIs.
*   **Real-Time Transcription:** Instantaneous conversion of speech to text using cloud-based ASR services.
*   **Intelligent Summarization:** AI analyzes long transcripts to generate concise, bulleted summaries.
*   **Automatic Tagging:** ML models infer context and apply relevant organizational tags (e.g., `Meeting`, `Idea`, `To-Do`).
*   **Offline Caching:** Local persistence via Realm/SQLite for immediate access.

## 🤖 AI Agent Directives (APEX Protocol)

<details><summary><strong>View Apex Technical Directives for Future Development</strong></summary>

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
    *   **No Guessing:** Do not hallucinate APIs. This project requires verified APIs for **Google Gemini (or OpenAI equivalent)** for summarization and a robust **ASR provider** (e.g., Google Speech-to-Text or Whisper). 
    *   **Research First:** Use `linkup`/`brave` to search for **December 2025 Industry Standards** for React Native performance optimization, Expo SDK v52+ features, and **Mobile Security Protocols** (e.g., key chain storage for API keys).
    *   **Validation:** Use `docfork` to verify *every* external SDK signature, especially for platform-specific modules (Audio Recorder).
    *   **Reasoning:** Engage `clear-thought-two` to architect complex state flows (e.g., handling interrupted recording states) *before* writing code.

---

## 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
**Directives:** This repository, `EchoNote-AI-Voice-Notes-React-Native-Mobile-App`, is a **Mobile Application** project.

*   **PRIMARY SCENARIO A: WEB / APP / GUI (Modern Frontend - Mobile Adapted)**
    *   **Stack:** **TypeScript (Strict)** enforced via `tsconfig.json`. **React Native 0.74+** running on **Expo SDK 52+**.
    *   **Lint/Test:** **Biome** (for industry-leading speed in linting/formatting) + **Vitest** (for component/unit testing) + **Playwright** (for E2E testing on mobile simulators/devices, focusing on hardware interactions).
    *   **Architecture:** **Feature-Sliced Design (FSD)** applied to the codebase structure, separating features into `entities`, `features`, `pages`, `shared`, and `widgets` directories for clear dependency graphs.
    *   **State Management:** Standardized on modern **Signals** or **Zustand** for centralized, predictable state.

## 4. VERIFICATION & EXECUTION
*   **Verification Commands:**
    *   `npm run lint`: Execute Biome check across the entire codebase.
    *   `npm run test:unit`: Run Vitest suite against domain and data logic.
    *   `npm run test:e2e`: Execute Playwright tests covering recording -> transcription -> summarization flow.
    *   `npm run build:apk` / `npm run build:ios`: Validate successful mobile build artifact generation via EAS.

</details>

## 🛠️ Development & Setup

This project utilizes TypeScript for type safety and Expo for rapid cross-platform deployment.

### Prerequisites
Ensure you have Node.js (v18+), npm/yarn/pnpm, and the Expo CLI installed.

### Initialization
bash
git clone https://github.com/chirag127/EchoNote-AI-Voice-Notes-React-Native-Mobile-App.git
cd EchoNote-AI-Voice-Notes-React-Native-Mobile-App

# Using uv (as recommended for modern JS ecosystems via package managers)
# Install dependencies using your preferred package manager
pnpm install


### Development Scripts
| Command | Description | Standard Followed |
| :--- | :--- | :--- |
| `npm run dev` | Start Metro bundler for local development on iOS/Android simulators. | High-Velocity |
| `npm run lint` | Run Biome to check formatting and TypeScript strictness. | Zero-Defect |
| `npm run test` | Execute Vitest unit and integration tests. | Verification |
| `npm run test:e2e` | Run Playwright end-to-end hardware interaction tests. | Future-Proof |
| `eas build -p all` | Build production artifacts (APK/IPA) via Expo Application Services. | Deployment |

### Core Architectural Principles Enforced
1.  **SOLID:** Especially Single Responsibility (SRP) in data adapters.
2.  **DRY:** Logic for transcription handling must be abstracted.
3.  **YAGNI:** Only implement features required for core note-taking immediately.

## 📜 Compliance & Licensing

This repository is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**.

Feel free to use, modify, and share the code for any non-commercial purpose, provided you give appropriate credit.

See the [LICENSE](./LICENSE) file for full details.
