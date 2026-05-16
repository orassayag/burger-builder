# Setup and Usage Instructions

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Available Commands](#available-commands)
4. [Application Features](#application-features)
5. [Project Structure](#project-structure)
6. [Component Architecture](#component-architecture)
7. [Extending the Application](#extending-the-application)
8. [Best Practices](#best-practices)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)
11. [Documentation](#documentation)
12. [External Resources](#external-resources)

## Prerequisites

### System Requirements

- **Node.js**: Version 20 or higher (as specified in package.json)
- **Package Manager**: npm or yarn
- **Operating System**: macOS, Linux, or Windows
- **Memory**: 4GB RAM minimum (recommended for development)
- **Modern Browser**: Chrome, Firefox, Safari, or Edge

### Knowledge Prerequisites

- Basic understanding of React and Redux
- Familiarity with JavaScript (ES6+) and CSS
- Understanding of Firebase (helpful for backend integration)

## Initial Setup

### 1. Install Dependencies

Clone the repository and install the required packages:

```bash
git clone https://github.com/orassayag/burger-builder.git
cd burger-builder
npm install
```

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Configuration

### Firebase Setup (Optional)

If you want to connect to your own Firebase backend:

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firebase Realtime Database
3. Set up authentication (Email/Password)
4. Update the API configuration in `src/api/api.js` with your Firebase URL

### Environment Variables

Create a `.env` file in the root directory (optional):

```
REACT_APP_API_URL=https://your-firebase-project.firebaseio.com
```

## Available Commands

### Development Commands

```bash
# Start development server with hot reloading
npm start

# Run tests in watch mode
npm test

# Check code for linting errors
npm run lint
```

### Running Scripts

```bash
# Build for production
npm run build
```

## Running the Application

### Development Mode

Runs the app with hot-reloading enabled:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production Build

Creates an optimized production build:

```bash
npm run build
```

The build folder will contain the optimized files ready for deployment.

### Testing

Launches the test runner in interactive watch mode:

```bash
npm test
```

## Application Features

### Building a Burger

1. Navigate to the home page
2. Add ingredients using the "Add" buttons:
   - Salad
   - Bacon
   - Cheese
   - Meat
3. Remove ingredients using the "Remove" buttons
4. Watch the price update in real-time
5. Click "ORDER NOW" when ready

### Authentication

1. Click "AUTHENTICATE" in the navigation
2. Switch between Sign In and Sign Up modes
3. Enter email and password
4. Submit to authenticate

### Placing Orders

1. Build your burger
2. Click "ORDER NOW" (requires authentication)
3. Review your order in the modal
4. Click "CONTINUE" to proceed to checkout
5. Fill in contact information:
   - Name
   - Email
   - Street address
   - ZIP code
   - Country
6. Select delivery method
7. Click "ORDER" to submit

### Viewing Orders

1. Authenticate first
2. Click "Orders" in the navigation
3. View all your previous orders with details

## Project Structure

```
burger-builder/
├── config/                 # Webpack and build configuration
├── public/                 # Static files
│   ├── index.html         # HTML entry point
│   └── manifest.json      # PWA manifest
├── scripts/               # Build and start scripts
├── src/
│   ├── api/               # API configuration (Axios)
│   ├── components/        # Presentational components
│   │   ├── Burger/       # Burger visualization components
│   │   ├── Logo/         # Logo component
│   │   ├── Navigation/   # Navigation components
│   │   ├── Order/        # Order display components
│   │   └── UI/           # Reusable UI components
│   ├── containers/        # Container components (Redux-connected)
│   │   ├── Auth/         # Authentication pages
│   │   ├── BurgerBuilder/# Main burger builder page
│   │   ├── Checkout/     # Checkout flow
│   │   └── Orders/       # Orders history page
│   ├── hoc/              # Higher-order components
│   │   ├── AsyncComponent/   # Code splitting HOC
│   │   ├── Auxiliary/        # Fragment-like wrapper
│   │   ├── ErrorHandler/     # Error boundary HOC
│   │   └── Layout/           # Main layout wrapper
│   ├── store/            # Redux state management
│   │   ├── actions/      # Action creators
│   │   └── reducers/     # Reducers
│   ├── shared/           # Shared utilities
│   ├── App.jsx           # Root component with routing
│   ├── index.js          # Application entry point
│   └── index.css         # Global styles
├── .eslintrc.json        # ESLint configuration
├── .firebaserc           # Firebase project configuration
├── firebase.json         # Firebase hosting configuration
└── package.json          # Dependencies and scripts
```

## Component Architecture

### State Management Flow

```
User Action → Redux Action → Reducer → Store Update → Component Re-render
```

### Key Redux Slices

1. **burgerBuilder**: Manages burger ingredients and pricing
2. **order**: Handles order submission and retrieval
3. **auth**: Manages authentication state and tokens

## Development Tips

### Hot Reloading

The development server automatically reloads when you make changes to the code.

### Debugging Redux

Install Redux DevTools extension in your browser to inspect state changes and actions.

### Code Splitting

The application uses lazy loading for routes to improve initial load time. See `AsyncComponent` HOC.

### CSS Modules

Component styles are scoped using CSS Modules. Each component can have its own `.css` file without style conflicts.

## Deployment

### Firebase Hosting

```bash
npm run build
firebase deploy
```

### Other Platforms

The build folder can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3

See the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment) for detailed instructions.

## Troubleshooting

### Build Fails

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`

### Port Already in Use

- Change the port: `PORT=3001 npm start`
- Kill the process using port 3000

### API Connection Issues

- Verify Firebase URL in `src/api/api.js`
- Check Firebase database rules
- Ensure internet connection

### Authentication Problems

- Check Firebase authentication is enabled
- Verify email/password provider is configured
- Check browser console for error messages

## Browser Support

This project supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Internet Explorer is not supported.

## Extending the Application

### Adding New Ingredients

1. Update `src/components/Burger/BurgerIngredient/BurgerIngredient.jsx` with the new ingredient type.
2. Add the ingredient CSS in `src/components/Burger/BurgerIngredient/BurgerIngredient.css`.
3. Add the new ingredient to the initial state in `src/store/reducers/burgerBuilder.js`.
4. Update `BuildControls` in `src/components/Burger/BuildControls/BuildControls.jsx`.

### Adding New Pages

1. Create a new container in `src/containers/`.
2. Define new actions and reducers in `src/store/` if needed.
3. Update `src/App.jsx` with the new route.
4. Add navigation link in `src/components/Navigation/NavigationItems/NavigationItems.jsx`.

## Best Practices

- **Atomic Components**: Keep components small and focused on a single responsibility.
- **Dumb Components**: Use functional components for UI that doesn't require state or lifecycle methods.
- **PropTypes**: Always define `propTypes` for components to ensure data integrity.
- **Utility Functions**: Extract reusable logic into `src/shared/utility.js`.
- **Async Actions**: Use Redux Thunk for all side effects and API calls.

## Documentation

- **README.md**: Overview of the project, architecture, and tech stack.
- **INSTRUCTIONS.md**: Detailed setup and usage guide.
- **Code Comments**: Implementation details can be found directly within the source files.

## External Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Documentation](https://redux.js.org/introduction/getting-started)
- [React Router Documentation](https://reacttraining.com/react-router/web/guides/quick-start)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Axios GitHub](https://github.com/axios/axios)

## Last Updated

May 2026

## Version

1.0.0

## Author

- **Or Assayag** - _Initial work_ - [orassayag](https://github.com/orassayag)
- Or Assayag <orassayag@gmail.com>
- GitHub: https://github.com/orassayag
- StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
- LinkedIn: https://linkedin.com/in/orassayag
