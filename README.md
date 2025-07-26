# Visual Testing App

A React Native application with comprehensive Playwright visual testing setup for automated visual regression testing.

## 🚀 Features

- **React Native Login Page**: Beautiful, responsive login interface
- **Visual Testing**: Automated visual regression testing with Playwright
- **GitHub Actions**: Automated testing on pull requests
- **Cross-platform**: Works on web, iOS, and Android
- **TypeScript**: Full TypeScript support

## 📱 Demo Credentials

- **Username**: `admin`
- **Password**: `password`

## 🛠️ Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Expo CLI (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd visual-testing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## 🏃‍♂️ Running the App

### Development Mode

```bash
# Start the development server
npm start

# Run on web
npm run web

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android
```

### Production Build

```bash
# Build for production
npm run build
```

## 🧪 Testing

### Visual Testing

```bash
# Run visual tests locally
npm run test-visual

# Run all tests with UI
npm run test-ui

# Run tests in Chrome
npm run test-chrome

# Generate test code
npm run test-codegen
```

### Test Coverage

The visual tests cover:

- ✅ Login page initial state
- ✅ Login page with filled form
- ✅ Login page loading state
- ✅ Login page error state
- ✅ Responsive design (mobile & tablet)
- ✅ Home page after successful login

## 🔄 GitHub Actions

The project includes automated visual testing that runs on:

- **Pull Requests**: Automatically tests changes
- **Main Branch**: Ensures baseline stability

### Workflow Features

- **Visual Regression Detection**: Compares screenshots with baseline
- **Cross-browser Testing**: Tests on Chromium
- **Artifact Upload**: Stores test results and screenshots
- **PR Comments**: Automatic feedback on pull requests
- **Responsive Testing**: Tests multiple viewport sizes

## 📁 Project Structure

```
visual-testing/
├── src/
│   └── screens/
│       ├── LoginScreen.tsx    # Login page component
│       └── HomeScreen.tsx     # Home page component
├── test/
│   └── automation/
│       ├── visual/
│       │   └── login-visual.spec.ts  # Visual test specs
│       └── playwright.config.ts      # Playwright configuration
├── .github/
│   └── workflows/
│       └── visual-testing.yml        # GitHub Actions workflow
├── App.tsx                           # Main app component
├── package.json                      # Dependencies and scripts
└── README.md                         # This file
```

## 🎨 Visual Testing Details

### Test Scenarios

1. **Initial State**: Clean login page without user input
2. **Filled Form**: Login page with credentials entered
3. **Loading State**: During authentication process
4. **Error State**: Invalid credentials entered
5. **Responsive Design**: Mobile and tablet viewports
6. **Success Flow**: Home page after successful login

### Screenshot Comparison

- **Baseline**: Screenshots from main/master branch
- **Comparison**: Screenshots from pull request
- **Threshold**: 100 pixel difference tolerance
- **Full Page**: Captures entire page content

## 🔧 Configuration

### Playwright Config

Located in `test/automation/playwright.config.ts`:

- **Base URL**: Configured for local development
- **Browsers**: Chromium and Firefox
- **Viewports**: Desktop, tablet, and mobile sizes
- **Timeouts**: Optimized for CI/CD environment

### Environment Variables

Create `.env.local` for local development:

```env
BASE_URL=http://localhost:19006
```

## 🐛 Troubleshooting

### Common Issues

1. **App not starting**: Ensure all dependencies are installed
2. **Visual tests failing**: Check if baseline screenshots exist
3. **CI/CD failures**: Verify Node.js version and browser installation

### Debug Commands

```bash
# Show Playwright report
npm run show-report

# Run tests with debug output
DEBUG=pw:api npx playwright test

# Install specific browser
npx playwright install chromium
```

## 📈 Best Practices

1. **Baseline Management**: Update baselines when UI changes are intentional
2. **Test Isolation**: Each test should be independent
3. **Responsive Testing**: Test multiple viewport sizes
4. **CI/CD Integration**: Run tests on every pull request
5. **Artifact Retention**: Keep test results for debugging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run visual tests locally
5. Submit a pull request

The GitHub Actions workflow will automatically run visual tests and provide feedback.

## 📄 License

This project is licensed under the ISC License.