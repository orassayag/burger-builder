# Instructions

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

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
