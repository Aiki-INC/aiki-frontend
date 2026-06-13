<h1 align="center">Aiki Frontend</h1>

<p align="center">
  Open-source Web3 education infrastructure for courses, learner dashboards, blockchain certificates, and learning rewards.
</p>

---

## Overview

Aiki is an open-source Web3 education platform designed to help instructors create courses, learners track their progress, and communities issue verifiable blockchain-based certificates.

This repository contains the frontend application for the Aiki platform.

## Problem

Online learning platforms often make it difficult for learners to prove course completion, for instructors to manage transparent learning records, and for communities to reward meaningful learning activity.

## Solution

Aiki uses modern frontend tools and Web3 infrastructure to support:

- Course discovery
- Learner enrollment
- Instructor dashboards
- Learner dashboards
- Progress tracking
- Certificate verification
- Future Stellar/Soroban payment and reward flows

## Features

- Modern responsive user interface
- Course and learning dashboard pages
- Wallet-ready Web3 architecture
- Reusable UI components
- Type-safe frontend development
- Planned Stellar/Soroban support

## Tech Stack

- Next.js
- TypeScript
- React
- Tailwind CSS
- shadcn/ui
- wagmi
- viem
- TanStack Query

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Aiki-INC/aiki-frontend.git
cd aiki-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

Create a `.env.local` file from the example file:

```bash
cp .env.example .env.local
```

Then update the value if you have a WalletConnect/Reown project ID:

```env
NEXT_PUBLIC_PROJECT_ID=your_walletconnect_or_reown_project_id
```

If you do not have a project ID yet, the app should still be able to run with MetaMask support if the wallet provider has been configured to make this variable optional.

### 4. Run the development server

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

## Available Scripts

Run the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Run lint checks:

```bash
npm run lint
```

Run TypeScript checks:

```bash
npm run type-check
```

## Project Structure

```text
aiki-frontend/
  app/              Application routes and pages
  components/       Reusable UI components
  hooks/            Custom React hooks
  lib/              Utilities and Web3 configuration
  mocks/            Mock data for development
  public/           Static assets
  README.md         Project documentation
  package.json      Project scripts and dependencies
```

## Stellar/Soroban Roadmap

Aiki is preparing support for the Stellar ecosystem. Planned work includes:

- Stellar wallet connection research
- Soroban-based certificate verification
- Course payment flow using Stellar assets
- Documentation for Stellar-powered learning rewards
- Contributor-friendly issues for Stellar Wave

## Contributing

We welcome contributors.

To contribute:

1. Check the open issues.
2. Comment on the issue you want to work on.
3. Fork the repository.
4. Create a new branch.
5. Make your changes.
6. Run checks before submitting:

```bash
npm run lint
npm run type-check
npm run build
```

7. Open a focused pull request with a clear description.

## Contribution Areas

Good areas for contributors include:

- UI improvements
- Documentation
- Dashboard components
- Wallet connection improvements
- Stellar/Soroban research
- Frontend testing
- Accessibility improvements

## License

MIT
