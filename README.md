# Town Manager

A web application for managing town-related data and operations.

## Features

- Modern web interface built with Next.js 13
- Server-side rendering for optimal performance
- Responsive design for desktop and mobile devices
- User authentication and authorization
- Dashboard for managing town services
- Emergency contacts directory
- Public services directory
- Proposal submission system
- Administrative procedures management
- Payment processing system

## Prerequisites

- Node.js 16.8 or later
- npm, yarn, or pnpm package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/town-manager.git
   cd town-manager
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Build for production:
   ```bash
   pnpm build
   ```

6. Start production server:
   ```bash
   pnpm start
   ```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run tests
