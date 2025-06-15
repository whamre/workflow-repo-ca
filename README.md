# Workflow Repo for the CA

This project is a venue booking website built with HTML, CSS, JavaScript, and TailwindCSS. It includes a complete development workflow with code quality tools, testing, and automation.

## Setup Instructions

### Prerequisites

- Node.js (version 16 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd workflow-repo-ca
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your actual values
```

### Development

Start the development server for CSS compilation:

```bash
npm run dev
```

Serve the project locally:

```bash
# Install http-server globally (one time only)
npm install -g http-server

# Start the server
http-server -p 3000
```

Then open `http://127.0.0.1:3000` in your browser.

## Available Scripts

- `npm run dev` - Start TailwindCSS compilation in watch mode
- `npm test` - Run unit tests with Vitest (watch mode)
- `npm run test:ui` - Run unit tests with Vitest UI
- `npm run test:run` - Run unit tests once
- `npm run test:e2e` - Run end-to-end tests with Playwright

## Testing

- `npm test` # Should show 6 unit tests passing
- `npm run test:e2e` # Should show 3 E2E tests passing

### Unit Tests

Unit tests are written with Vitest and test the following functions:

- `isActivePath` - Navigation path matching logic
- `getUsername` - User storage functionality

### End-to-End Tests

E2E tests are written with Playwright and test:

- User login functionality (valid and invalid credentials)
- Navigation from home page to venue details

## Environment Variables

The following environment variables are required for E2E testing:

- `LOGIN_EMAIL` - Email address for test user login
- `LOGIN_PASSWORD` - Password for test user login

See `.env.example` for the required format.

## Development Tools

This project includes:

- **ESLint** - Code linting and quality checks
- **Prettier** - Code formatting
- **Husky** - Git hooks for automated checks
- **lint-staged** - Run linting and formatting on staged files only

Pre-commit hooks will automatically format and lint your code before each commit.

## Project Structure

```
├── css/                 # Stylesheets
├── js/                  # JavaScript modules
│   ├── api/            # API integration
│   ├── ui/             # UI components
│   ├── utils/          # Utility functions
│   └── listeners/      # Event listeners
├── tests/              # Test files
│   ├── utils/          # Unit tests
│   └── e2e/            # End-to-end tests
├── login/              # Login page
├── register/           # Registration page
├── venue/              # Venue details page
└── index.html          # Home page
```
