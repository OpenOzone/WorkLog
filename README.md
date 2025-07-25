# Chrome Extension with React, TypeScript, and TailwindCSS

## Features

- 🚀 Built with Vite for lightning-fast development
- ⚛️ React for component-based UI development
- 📝 TypeScript for type safety
- 🎨 TailwindCSS for utility-first styling
- 🧩 Chrome Extension Manifest V3
- 🔧 ESLint + Prettier for code quality

## Project Structure

```
├── src/
│   ├── popup/           # Extension popup
│   ├── options/         # Options page
│   ├── content/         # Content scripts
│   ├── background/      # Service worker
│   ├── components/      # Shared components
│   └── types/          # TypeScript types
├── public/             # Static assets
└── dist/              # Build output
```

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Loading the Extension

1. Build the project:
   ```bash
   npm run build
   ```
2. Open Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the `dist` directory

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
