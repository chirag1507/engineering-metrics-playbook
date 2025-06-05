# Engineering Metrics Playbook

This repository contains the source code for the Engineering Metrics Playbook, a comprehensive guide developed by Avesta Technologies. This playbook is designed to help organizations understand, implement, and leverage key engineering metrics to improve productivity, quality, and overall product delivery effectiveness.

The playbook explores a curated set of engineering metrics grounded in industry best practices and the wisdom of thought leaders like Kent Beck, Dave Farley, Martin Fowler, and Robert C. Martin.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (version 18.x or later recommended)
- npm (comes with Node.js) or yarn

### Installation & Running Locally

1.  **Clone the repository (if you haven't already):**

    ```bash
    git clone https://github.com/chirag1507/engineering-metrics-playbook.git
    cd engineering-metrics-playbook
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

3.  **Start the development server:**
    Using npm:
    ```bash
    npm run start
    ```
    Or using yarn:
    ```bash
    yarn start
    ```
    This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server. The site is typically available at `http://localhost:3000`.

### Building the Site

To create a static production build:

Using npm:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

The build artifacts will be placed in the `build` directory.

## Deployment

This site is designed to be deployed as a static website. It can be hosted on various platforms such as:

- AWS Amplify (see deployment guide)
- GitHub Pages
- Netlify
- Vercel
- Other static web hosting services

The `npm run deploy` script is configured for GitHub Pages by default but may require specific setup (like ensuring the project is a Git repository with a remote).

## Content Overview

The playbook covers a range of topics, including:

- **Introduction:** Setting the stage for why engineering metrics are crucial.
- **Why Metrics Matter:** The business value and operational benefits.
- **Our Approach:** Grounding the metrics in Lean, Agile, XP, and CD principles.
- **Metrics Categorization:** Tactical and Strategic views of metrics.
- **Key Metric Areas:**
  - Project Flow Metrics
  - Code Delivery Metrics
  - Code & System Quality Metrics
  - Team Health & Collaboration Metrics
  - Product Impact Metrics
- **Implementation:** Guidance on fostering a metrics-driven culture.
- **Glossary & References.**
