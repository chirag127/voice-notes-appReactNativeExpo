# Security Policy

## Supported Versions

We are committed to providing a secure product. We actively monitor and patch security vulnerabilities in the following versions:

| Version | Supported          |
|---------|--------------------|
| Main (main) | :white_check_mark: |

## Reporting a Vulnerability

We appreciate your efforts to responsibly disclose security vulnerabilities in the EchoNote-AI-Voice-Notes-React-Native-Mobile-App project. Please follow these steps to report a vulnerability:

1.  **DO NOT** open a public issue or pull request. This can expose sensitive information to unauthorized parties.
2.  Send a detailed email to `chirag127@users.noreply.github.com` with the subject line `Security Vulnerability Report: [Brief Description of Vulnerability]`. Please use the GitHub security advisory system if possible.
3.  Include the following information in your report:
    *   The affected version of the EchoNote-AI-Voice-Notes-React-Native-Mobile-App project.
    *   A clear and concise description of the vulnerability.
    *   Steps to reproduce the vulnerability.
    *   Any known impact or severity of the vulnerability.
    *   Proof-of-concept (if available and not sensitive).
4.  We will acknowledge receipt of your report within **48 hours** and will make a best effort to address the vulnerability promptly.
5.  We will assign a CVE identifier once the vulnerability has been confirmed and a fix is ready or deployed.

## Security Practices

*   **Dependency Management:** We regularly audit our dependencies and use tools to scan for known vulnerabilities. Updates are managed via `uv` and `npm`/`yarn`.
*   **Code Reviews:** All code changes undergo rigorous peer review, with a focus on security best practices.
*   **Testing:** Comprehensive unit and end-to-end tests, including security-focused scenarios, are part of our CI/CD pipeline.
*   **Secrets Management:** Sensitive information is never hardcoded. We utilize environment variables and secure secret management solutions.
*   **TypeScript Strictness:** We enforce strict type checking in TypeScript to catch potential runtime errors and vulnerabilities early.
*   **Expo Security:** We adhere to Expo's security best practices for mobile application development.

## Responsible Disclosure Timeline

We aim to follow a responsible disclosure process:

1.  **Vulnerability Reported:** You report a vulnerability.
2.  **Acknowledgement:** We acknowledge receipt within 48 hours.
3.  **Investigation:** We investigate the report.
4.  **Fix Development:** If confirmed, we develop a fix.
5.  **Release:** We release a patched version.
6.  **Public Disclosure:** After a fix is released, we may publicly disclose details of the vulnerability, often with a CVE.

Thank you for helping to keep the EchoNote-AI-Voice-Notes-React-Native-Mobile-App project secure!
