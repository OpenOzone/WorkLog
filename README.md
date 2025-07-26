# WorkLog - Chrome Extension by OpenOzone

WorkLog is a Chrome extension under development by OpenOzone to streamline time tracking and work hours management. Built with modern web technologies, it aims to provide a seamless and intuitive user experience for logging work hours and calculating work schedules through API integrations.

## Features

- ⚛️ **React**: Component-based UI development for a modular and maintainable codebase.
- 📝 **TypeScript**: Type safety for robust and error-free development.
- 🎨 **TailwindCSS**: Utility-first styling for a consistent and responsive design.
- 🧩 **Chrome Extension Manifest V3**: Modern Chrome extension architecture for enhanced security and performance.
- 🔧 **ESLint + Prettier**: Ensure code quality and consistent formatting.

## Planned Features

- 🚀 **Time Tracking Screen**: A dedicated screen to log work hours, featuring a button to submit time entries to external time tracking APIs.
- 📊 **Time Calculation Sheet**: A screen to display immutable work hours data retrieved from API responses, ensuring accurate and system-verified work schedule calculations.
- 🔗 **API Integration**: Seamless integration with external time tracking APIs to submit and retrieve work hours data.
- 🧭 **Custom Navigation Tabs**: Tabs at the top of the page to allow users to switch between screens (e.g., time tracking screen, time calculation sheet) effortlessly.

## Project Structure

```
├── src/
│   ├── popup/           # Extension popup (planned for time tracking screen)
│   ├── options/         # Options page (planned for time calculation sheet)
│   ├── content/         # Content scripts
│   ├── background/      # Service worker for API integration
│   ├── components/      # Shared React components
│   └── types/          # TypeScript types
├── public/             # Static assets (e.g., icons, images)
└── dist/              # Build output
```

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/OpenOzone/WorkLog.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Development

- `npm run dev` - Start the development server with hot reloading.
- `npm run build` - Build the extension for production.
- `npm run lint` - Run ESLint to check code quality.
- `npm run format` - Format code with Prettier.

## Loading the Extension

1. Build the project:
   ```bash
   npm run build
   ```
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" in the top right.
4. Click "Load unpacked" and select the `dist` directory from the project.

## Roadmap

The WorkLog extension is in active development. The following features are planned:
- **Time Tracking Screen**: A new screen with a button to log work hours via external APIs (see [Issue #5](https://github.com/OpenOzone/WorkLog/issues/5)).
- **Time Calculation Sheet**: A screen to display API-returned work hours as immutable values and values added manually (see [Issue #6](https://github.com/OpenOzone/WorkLog/issues/6)).
- **API Integration**: Support for external time tracking APIs to submit and retrieve data (see [Issue #4](https://github.com/OpenOzone/WorkLog/issues/4)).
- **Custom Navigation Tabs**: Tabs for seamless navigation between screens (see [Issue #3](https://github.com/OpenOzone/WorkLog/issues/3)).

Contributions to these features are highly encouraged!

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please check the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines and ensure your code follows our ESLint and Prettier configurations.

## License

MIT
