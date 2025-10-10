# GitHub Actions Workflows

This directory contains GitHub Actions workflows for automated CI/CD, security scanning, and maintenance of the ride-more.org website.

## 📋 Workflow Overview

### 🔍 `codeql.yml` - Security Scanning

**Triggers:** Push to main, PRs, Weekly schedule (Mondays 1:30 AM UTC)

- **CodeQL Analysis** - Automated security vulnerability detection
- **Language Coverage** - JavaScript/TypeScript
- **Query Pack** - Security and quality queries
- **Results** - Published to GitHub Security tab

### 🏗️ `ci.yml` - Continuous Integration

**Triggers:** Push to main, Pull requests

**Jobs:**

- **Build & Test** - Single environment testing (Node.js 22.x, Bun 1.2.x)
- **Lint & Format** - Code quality checks (ESLint, Prettier)
- **Security Audit** - Dependency vulnerability scanning

**Features:**

- ✅ **Environment matching** - Tests with exact Cloudflare Pages versions
- ✅ **Bun 1.2.x** and **Node.js 22.x** (compatible with Cloudflare Pages System v3)
- ✅ **Dependency caching** for faster builds
- ✅ **Code quality enforcement** - ESLint and Prettier checks
- ✅ **Essential validation** - Build verification and type checking
- ✅ **Security auditing** - Automated dependency vulnerability scanning

### 🌐 Deployment - Cloudflare Pages

**Automatic Deployment:** Handled by Cloudflare Pages

**Features:**

- ✅ **Automatic deployment** on push to main branch
- ✅ **Preview deployments** for all pull requests
- ✅ **Build optimization** and global CDN distribution
- ✅ **Custom domains** with automatic SSL certificates
- ✅ **Edge functions** and serverless capabilities

### 🔄 Dependabot - Automated Dependency Management

**Configuration:** `.github/dependabot.yml`

**Features:**

- ✅ **Weekly dependency updates** for npm packages and GitHub Actions
- ✅ **Grouped updates** to reduce PR noise (production vs dev dependencies)
- ✅ **Security updates** with automatic priority handling
- ✅ **Smart scheduling** to avoid conflicts with CI
- ✅ **Automatic assignment** and labeling of PRs
- ✅ **Major version protection** for critical dependencies (React, Docusaurus)

## 🛠️ Setup and Configuration

### Cloudflare Pages Deployment

**Automatic Setup:** No configuration needed! Cloudflare Pages automatically:

- **Builds** your site when you push to main
- **Deploys** to production with global CDN
- **Creates preview deployments** for pull requests
- **Handles** SSL certificates and custom domains

### Branch Protection Rules

Configure these branch protection rules for the `main` branch:

- ✅ **Require pull request reviews** - At least 1 approval
- ✅ **Require status checks** - All CI jobs must pass
- ✅ **Require branches to be up to date** - Force rebase before merge
- ✅ **Require conversation resolution** - All review comments resolved
- ✅ **Include administrators** - Apply rules to admins

**Required Status Checks:**

- `Build and Test`
- `Lint and Format Check`
- `Security Audit`
- `Analyze Code` (CodeQL)

## 📊 Workflow Status

You can monitor workflow status in several ways:

### GitHub Interface

- **Actions Tab** - View all workflow runs
- **Security Tab** - CodeQL findings and alerts  
- **Pull Requests** - Status checks and preview links
- **Issues** - Automated security vulnerability reports

### Workflow Badges

Add these badges to your README.md:

```markdown
[![CI](https://github.com/bcdady/ride-more-org/workflows/CI/badge.svg)](https://github.com/bcdady/ride-more-org/actions/workflows/ci.yml)
[![Security](https://github.com/bcdady/ride-more-org/workflows/CodeQL%20Security%20Scanning/badge.svg)](https://github.com/bcdady/ride-more-org/actions/workflows/codeql.yml)
```

## 🔧 Customization

### Adding New Checks

To add new validation steps to CI:

1. **Edit `ci.yml`** - Add new job or step
2. **Test locally** - Ensure commands work
3. **Update status checks** - Add to branch protection rules

### Cloudflare Pages Configuration

To configure Cloudflare Pages deployment:

1. **Connect repository** - Link GitHub repo to Cloudflare Pages
2. **Configure build settings** - Set build command: `bun run build`
3. **Set output directory** - Configure: `build`
4. **Custom domain** - Add your domain in Cloudflare Pages dashboard
5. **Environment variables** - Configure in Cloudflare Pages settings if needed

### Dependabot Configuration

Dependabot is configured via `.github/dependabot.yml` with sensible defaults:

1. **Update schedule** - Weekly updates on Mondays
2. **Grouping** - Production and development dependencies are grouped separately
3. **Auto-assignment** - PRs are automatically assigned to you
4. **Labels** - Automatic labeling for easy filtering
5. **Major version protection** - Major updates blocked for critical dependencies

To customize:
- Edit `.github/dependabot.yml`
- Modify update frequency, groupings, or ignored packages
- Adjust assignees and reviewers as needed

### Security Configuration

Security workflows are pre-configured for:

- **CodeQL scanning** - JavaScript/TypeScript analysis
- **Dependency auditing** - NPM/Bun security vulnerabilities
- **DCO compliance** - Developer Certificate of Origin validation

## 🚨 Troubleshooting

### Common Issues

**Build failures:**

- Check Node.js version compatibility
- Verify Bun lockfile is committed
- Review dependency compatibility

**Security alerts:**

- Check GitHub Security tab for details
- Review automated issues for vulnerability details
- Update dependencies with `bun update`
- Review Dependabot PRs in the Pull Requests tab

**Cloudflare Pages deployment issues:**

- Check build logs in Cloudflare Pages dashboard
- Verify build command is set to `bun run build`
- Ensure output directory is set to `build`
- Test build locally with `bun run build`

**DCO failures:**

- Ensure all commits are signed-off
- Use `git rebase --signoff` to fix multiple commits

**Dependabot issues:**

- Check Dependabot status in repository **Insights > Dependency graph > Dependabot**
- Review failed Dependabot runs in the **Actions** tab
- Verify `.github/dependabot.yml` configuration syntax
- Check if dependencies have conflicting version requirements

### Getting Help

- **Workflow logs** - Check Actions tab for detailed error messages
- **Status checks** - Review failed checks on pull requests  
- **Security findings** - Review Security tab for vulnerability details
- **Issues** - Automated issues provide context for security problems
