# Yarn Command Reference

Quick reference guide for Yarn 4.x commands and their npm equivalents.

## Installation Commands

| Task | Yarn 4.x | npm | Notes |
|------|----------|-----|-------|
| Install all dependencies | `yarn install` | `npm install` | Uses yarn.lock |
| Install (immutable) | `yarn install --immutable` | `npm ci` | Fails if lockfile changes |
| Update lockfile only | `yarn install --mode update-lockfile` | `npm install --package-lock-only` | No node_modules install |
| Add package | `yarn add <pkg>` | `npm install <pkg>` | Saves to dependencies |
| Add dev package | `yarn add -D <pkg>` | `npm install --save-dev <pkg>` | Saves to devDependencies |
| Remove package | `yarn remove <pkg>` | `npm uninstall <pkg>` | Updates lockfile |
| Install from cache | `yarn install --immutable --immutable-cache` | `npm ci --prefer-offline` | Requires cache populated |

## Running Scripts

| Task | Yarn 4.x | npm | Notes |
|------|----------|-----|-------|
| Run script | `yarn <script>` | `npm run <script>` | Shorter syntax |
| Run script | `yarn run <script>` | `npm run <script>` | Explicit form |
| Run binary | `yarn dlx <cmd>` | `npx <cmd>` | Download & execute |
| Run binary (local) | `yarn <binary>` | `npx <binary>` | From node_modules/.bin |

## Package Management

| Task | Yarn 4.x | npm | Notes |
|------|----------|-----|-------|
| Upgrade package | `yarn up <pkg>` | `npm update <pkg>` | Respects semver |
| Upgrade to latest | `yarn up <pkg>@latest` | `npm install <pkg>@latest` | Ignores semver |
| Upgrade interactive | `yarn upgrade-interactive` | - | Requires plugin |
| Upgrade all | `yarn up "*"` | `npm update` | All dependencies |
| Check outdated | `yarn outdated` | `npm outdated` | Shows available updates |
| Show package info | `yarn info <pkg>` | `npm view <pkg>` | Package metadata |
| List dependencies | `yarn list` | `npm list` | Dependency tree |
| Deduplicate | `yarn dedupe` | `npm dedupe` | Remove duplicates |

## Security & Auditing

| Task | Yarn 4.x | npm | Notes |
|------|----------|-----|-------|
| Audit all dependencies | `yarn npm audit` | `npm audit` | Check vulnerabilities |
| Audit production only | `yarn npm audit --environment production` | `npm audit --production` | Production deps only |
| Audit with severity | `yarn npm audit --severity moderate` | `npm audit --audit-level moderate` | Fail on moderate+ |
| Audit all recursive | `yarn npm audit --all --recursive` | `npm audit` | Deep scan |
| Audit JSON output | `yarn npm audit --json` | `npm audit --json` | Machine-readable |
| Fix vulnerabilities | `yarn up <pkg>@latest` | `npm audit fix` | Manual in Yarn 4 |

## Cache Management

| Task | Yarn 4.x | npm | Notes |
|------|----------|-----|-------|
| Clear cache | `yarn cache clean` | `npm cache clean --force` | Remove all cached |
| Clear specific package | `yarn cache clean <pkg>` | - | Package-specific |
| Show cache location | `yarn config get cacheFolder` | `npm config get cache` | Cache directory |
| Verify cache | `yarn install --check-cache` | `npm cache verify` | Integrity check |

## Configuration

| Task | Yarn 4.x | npm | Notes |
|------|----------|-----|-------|
| Get config value | `yarn config get <key>` | `npm config get <key>` | Read setting |
| Set config value | `yarn config set <key> <value>` | `npm config set <key> <value>` | Write setting |
| List all config | `yarn config` | `npm config list` | All settings |
| Set registry | `yarn config set npmRegistryServer <url>` | `npm config set registry <url>` | Package source |

## Yarn-Specific Commands

| Task | Command | Description |
|------|---------|-------------|
| Set Yarn version | `yarn set version <version>` | Change project Yarn version |
| Set to latest stable | `yarn set version stable` | Upgrade to latest stable |
| Explain peer deps | `yarn explain peer-requirements` | Show peer dependency issues |
| Check integrity | `yarn install --check-cache` | Verify package integrity |
| Why package installed | `yarn why <pkg>` | Show dependency chain |
| Workspace info | `yarn workspaces list` | List all workspaces |
| Run in workspace | `yarn workspace <name> <cmd>` | Execute in specific workspace |
| Run in all workspaces | `yarn workspaces foreach <cmd>` | Execute in all workspaces |

## Project Initialization

| Task | Yarn 4.x | npm | Notes |
|------|----------|-----|-------|
| Initialize project | `yarn init` | `npm init` | Create package.json |
| Initialize (skip prompts) | `yarn init -y` | `npm init -y` | Use defaults |

## Publishing (npm registry)

| Task | Yarn 4.x | npm | Notes |
|------|----------|-----|-------|
| Publish package | `yarn npm publish` | `npm publish` | To npm registry |
| Publish with tag | `yarn npm publish --tag <tag>` | `npm publish --tag <tag>` | Beta, next, etc. |
| Pack tarball | `yarn pack` | `npm pack` | Create .tgz file |

## Common Workflows

### Install dependencies for CI
```bash
yarn install --immutable --immutable-cache
```

### Update a single package
```bash
yarn up <package-name>@latest
```

### Update all packages (patch/minor)
```bash
yarn up "*"
```

### Check for security vulnerabilities
```bash
yarn npm audit --environment production --severity moderate
```

### Clear cache and reinstall
```bash
yarn cache clean
rm -rf node_modules
yarn install
```

### Check why a package is installed
```bash
yarn why <package-name>
```

### Add package and update lockfile
```bash
yarn add <package-name>
```

### Generate fresh lockfile
```bash
rm yarn.lock
yarn install
```

## Useful Flags

| Flag | Description |
|------|-------------|
| `--immutable` | Fail if lockfile would change |
| `--immutable-cache` | Fail if cache entries are missing |
| `--check-cache` | Verify package integrity |
| `--mode update-lockfile` | Only update lockfile, don't install |
| `--frozen-lockfile` | Deprecated; use `--immutable` |
| `-D, --dev` | Add to devDependencies |
| `-P, --peer` | Add to peerDependencies |
| `-O, --optional` | Add to optionalDependencies |
| `--prefer-offline` | Use cache when available |

## Environment Variables

```bash
# Use specific Yarn version
YARN_IGNORE_NODE=1 yarn install

# Disable telemetry
YARN_ENABLE_TELEMETRY=0 yarn install

# Use different registry
YARN_NPM_REGISTRY_SERVER=https://registry.npmjs.org/ yarn install

# Increase network timeout
YARN_HTTP_TIMEOUT=60000 yarn install
```

## Tips & Best Practices

### For Local Development
```bash
# Fast installs - use cache
yarn install

# Update specific package
yarn up <package>

# Check what's outdated
yarn outdated
```

### For CI/CD
```bash
# Enable Corepack first
corepack enable

# Immutable install
yarn install --immutable

# Run type checking
yarn typecheck

# Run tests
yarn test
```

### Troubleshooting

**Dependencies won't install:**
```bash
rm -rf node_modules .yarn/cache yarn.lock
yarn install
```

**Cache corruption:**
```bash
yarn cache clean
yarn install
```

**Lockfile conflicts:**
```bash
# Accept theirs, regenerate
git checkout --theirs yarn.lock
yarn install
```

**Version mismatch:**
```bash
# Check version
yarn --version

# Set specific version
yarn set version 4.13.0
```

## References

- [Official Yarn Documentation](https://yarnpkg.com/)
- [Yarn CLI Commands](https://yarnpkg.com/cli)
- [Migration Guide](https://yarnpkg.com/getting-started/migration)
- [Yarn vs npm Commands](https://yarnpkg.com/getting-started/migration#npm)

---

**Project Yarn Version:** 4.13.0  
**Package Manager:** Specified in `package.json` via `packageManager` field  
**Configuration:** `.yarnrc.yml`
