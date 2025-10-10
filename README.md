# MORE Club Resource Center

[![CI](https://github.com/bcdady/ride-more-org/workflows/CI/badge.svg)](https://github.com/bcdady/ride-more-org/actions/workflows/ci.yml)
[![Security](https://github.com/bcdady/ride-more-org/workflows/CodeQL%20Security%20Scanning/badge.svg)](https://github.com/bcdady/ride-more-org/actions/workflows/codeql.yml)

> Essential resources for safe and enjoyable off-road motorcycle adventures

Welcome to the **MORE Club Resource Center** - your comprehensive guide to off-road motorcycle riding, safety guidelines, trail information, and community resources.

🌐 **Live Site:** [ride-more.org](https://ride-more.org)  
📧 **Contact:** [more@ride-more.org](mailto:more@ride-more.org)

## 🏍️ What We Provide

- **Safety Guidelines** - Essential safety practices and emergency procedures
- **Trail Information** - Local trail systems, maps, and current conditions  
- **Riding Styles Guide** - Comprehensive guide to different motorcycle types and riding styles
- **Community Resources** - Connect with fellow riders and join group rides

## 🚀 Quick Start for Contributors

### Prerequisites

This project uses [Bun](https://bun.sh/) for faster package management and builds.

- **Node.js 22+** (we test with Node.js 22.x to match our deployment environment)
- **Bun 1.2+** (recommended) or npm/yarn as fallback
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/bcdady/ride-more-org.git
cd ride-more-org

# Install dependencies
bun install

# Or using npm/yarn
npm install
# yarn install
```

### Local Development

```bash
# Start development server
bun start

# Or using npm/yarn
npm start
# yarn start
```

This starts a local development server at `http://localhost:3000` with hot reloading. Most changes are reflected live without restarting the server.

### Building for Production

```bash
# Build static site
bun run build

# Serve locally to test
bun run serve
```

### Code Quality & Testing

```bash
# Type checking
bun run typecheck

# Linting (if configured)
bun run lint

# Format code (if configured)
bun run format
```

## 📝 Contributing

We welcome contributions! Please follow these guidelines:

### 🔄 Development Workflow

1. **Fork** the repository
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test locally
4. **Commit with DCO sign-off**: `git commit -s -m "feat: add amazing feature"`
5. **Push** your branch: `git push origin feature/amazing-feature`
6. **Create a Pull Request** with a clear description

### ✅ Pull Request Requirements

Our automated CI pipeline will check:

- ✅ **Build success** - Your changes build without errors
- ✅ **Code quality** - ESLint and Prettier formatting
- ✅ **Security** - Dependency vulnerabilities and code security
- ✅ **DCO compliance** - All commits must be signed off

### 📁 Project Structure

```
ride-more-org/
├── docs/                 # Main documentation content
│   ├── intro.md         # Club resources overview
│   ├── safety.md        # Safety guidelines
│   ├── trails.md        # Trail information
│   └── styles.md        # Motorcycle types & styles
├── blog/                # Blog posts and updates
├── src/                 # Custom React components
├── static/              # Static assets (images, files)
├── .github/             # GitHub workflows and automation
└── docusaurus.config.js # Site configuration
```

### 🎨 Content Guidelines

**Writing Style:**
- Use clear, accessible language
- Focus on safety and practical information
- Include relevant examples and tips

**Safety Content:**
- Always emphasize safety first
- Provide actionable, specific guidance
- Include emergency procedures where relevant

**Technical Content:**
- Keep explanations beginner-friendly
- Use bullet points for easy scanning
- Include links to authoritative sources

## 🛠️ Technical Details

**Built With:**
- [Docusaurus 3](https://docusaurus.io/) - Static site generator
- [React](https://reactjs.org/) - UI components
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Bun](https://bun.sh/) - Fast package manager and runtime

**Deployment:**
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Domain:** [ride-more.org](https://ride-more.org)
- **SSL:** Automatic via Cloudflare
- **CDN:** Global distribution via Cloudflare

**Automation:**
- **CI/CD:** GitHub Actions for testing and quality checks
- **Dependencies:** Automated updates via Dependabot
- **Security:** CodeQL scanning and dependency auditing
- **Preview:** Automatic preview deployments for pull requests

## 🤝 Community

- **Discord:** [Join our community](/discord) for real-time discussions
- **Issues:** [Report bugs or request features](https://github.com/bcdady/ride-more-org/issues)
- **Email:** [more@ride-more.org](mailto:more@ride-more.org) for general inquiries

## 📄 License

This project is open source. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Thanks to all contributors who help make off-road riding safer and more accessible for everyone!

---

**Remember: The goal is to have fun while staying safe. When in doubt, ask questions or seek guidance from experienced riders.**
