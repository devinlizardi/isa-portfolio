# isa-portfolio

A modern single-page application (SPA) built with React v18, TypeScript, Vite, and SCSS modules.

## 🚀 Tech Stack

- **React v18.3.1** - Modern React with TypeScript
- **Vite v7.2.2** - Lightning-fast build tool and dev server
- **SCSS Modules** - Scoped styling with SCSS preprocessing
- **TypeScript** - Type-safe development
- **ESLint** - Code quality and consistency

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 🏗️ Project Structure

```
isa-portfolio/
├── src/
│   ├── assets/          # Static assets (images, icons, etc.)
│   ├── App.module.scss  # Component-level SCSS module
│   ├── App.tsx          # Main App component
│   ├── index.scss       # Global styles
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite and SCSS module type definitions
├── public/              # Public static assets
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## 🎨 Using SCSS Modules

SCSS modules provide scoped styling to prevent CSS conflicts:

```tsx
// Import the styles
import styles from './App.module.scss'

// Use in your component
<div className={styles.myClass}>Content</div>
```

For global styles, use the `index.scss` file.

## 🔧 Configuration

The project is configured for scalability and simplicity:

- **Vite** handles all bundling and dev server needs
- **TypeScript** provides type safety with strict mode enabled
- **SCSS Modules** ensure component-level style encapsulation
- **ESLint** maintains code quality with React-specific rules

## 📝 Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌟 Features

- ⚡️ Lightning-fast HMR with Vite
- 🎯 Type-safe development with TypeScript
- 🎨 Modular SCSS with scoped styles
- 📦 Optimized production builds
- 🔍 Linting with ESLint
- 🚀 Simple deployment-ready output

## 📄 License

This project is private.
