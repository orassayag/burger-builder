# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/burger-builder/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Your environment details (OS, Browser, Node version)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **React** with class components
- **Redux** for state management
- **ESLint** for code quality
- **Create React App** configuration

Before submitting:
```bash
# Check for linting errors
npm run lint

# Build to ensure no errors
npm run build

# Test the application
npm test
npm start
```

### Coding Standards

1. **Component Structure**: Follow the existing pattern of separating containers from presentational components
2. **Redux Actions**: Keep actions simple and use Redux Thunk for async operations
3. **Naming**: Use clear, descriptive names for components, actions, and reducers
4. **File Organization**: 
   - Components go in `src/components/`
   - Containers go in `src/containers/`
   - Redux logic goes in `src/store/`
5. **CSS Modules**: Use CSS modules for component styling to avoid conflicts
6. **PropTypes**: Define PropTypes for all components receiving props

### Adding New Features

When adding new features:
1. Create appropriate components in `src/components/` or `src/containers/`
2. Add Redux actions/reducers in `src/store/` if state management is needed
3. Update routing in `src/App.jsx` if new pages are added
4. Add appropriate styling using CSS modules
5. Test thoroughly in development mode
6. Consider mobile responsiveness

### Component Guidelines

**Presentational Components** (`src/components/`):
- Should be stateless when possible
- Focus on how things look
- Receive data and callbacks via props
- Use CSS modules for styling

**Container Components** (`src/containers/`):
- Connect to Redux store
- Handle business logic
- Pass data to presentational components
- Manage local component state if needed

### Redux Guidelines

1. **Action Types**: Define in `src/store/actions/actionTypes.js`
2. **Actions**: Create action creators in appropriate files under `src/store/actions/`
3. **Reducers**: Keep reducers pure and immutable
4. **Async Operations**: Use Redux Thunk middleware for API calls

### Testing

When adding new features, consider adding tests:
- Unit tests for utility functions
- Component tests for complex components
- Integration tests for Redux flows

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
