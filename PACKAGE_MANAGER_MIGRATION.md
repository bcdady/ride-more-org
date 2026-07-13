# Package Manager Migration: Bun → Yarn

## Summary

This project has been migrated from **Bun** to **Yarn 4.13.0** (latest stable) for dependency management.

## Why the Change?

- **Bun v1.2.23 had persistent hanging issues** during `bun install`, getting stuck at "Resolving [1/7]" indefinitely
- **Consistency across projects**: The related `bryandady.com` project uses Yarn 4.9.1
- **Reliability**: Yarn provides stable, well-tested dependency resolution
- **Better compatibility**: Yarn has broader ecosystem support and tooling integration

## What Changed

### Files Modified

1. **`package.json`**
   - Added `"packageManager": "yarn@4.13.0"`
   - Version bumped to `1.2.3` (from automated release)

2. **`.yarnrc.yml`** (new)
   - Yarn 4 configuration with sensible defaults
   - Uses `nodeLinker: node-modules` for compatibility
   - Network timeout and concurrency settings
   - Upgraded to Yarn 4.13.0 (latest stable)

3. **`.gitignore`**
   - Added Yarn 4 specific ignore patterns
   - Excludes `.yarn/cache`, `.yarn/unplugged`, etc.

4. **CI/CD Workflows**
   - `.github/workflows/ci.yml` - Updated to use Yarn
   - `.github/workflows/release.yml` - Updated to use Yarn
   - Removed Bun setup steps
   - Added Corepack enablement
   - Changed cache strategy from Bun to Yarn

### Files Removed

- `bunfig.toml` - No longer needed
- `bun.lock` - Replaced with `yarn.lock`
- `package-lock.json` - Conflicting lock file from npm

## Using Yarn

### Installation Commands

```bash
# Install dependencies
yarn install

# Install with frozen lockfile (CI)
yarn install --immutable

# Add a package
yarn add <package-name>

# Add a dev dependency
yarn add -D <package-name>

# Remove a package
yarn remove <package-name>

# Upgrade dependencies
yarn up <package-name>
yarn up "*@latest"  # upgrade all to latest
```

### Running Scripts

```bash
# Run any script from package.json
yarn start
yarn build
yarn typecheck
yarn serve

# Run a package binary (like bunx/npx)
yarn dlx <command>
```

### Useful Yarn Commands

```bash
# Check for outdated packages
yarn outdated

# Explain peer dependency issues
yarn explain peer-requirements

# Clear cache
yarn cache clean

# Check integrity
yarn install --check-cache

# Deduplicate dependencies
yarn dedupe
```

## Command Comparison

| Task | Bun | Yarn |
|------|-----|------|
| Install | `bun install` | `yarn install` |
| Add package | `bun add pkg` | `yarn add pkg` |
| Remove package | `bun remove pkg` | `yarn remove pkg` |
| Run script | `bun run start` | `yarn start` |
| Run binary | `bunx prettier` | `yarn dlx prettier` |
| Upgrade deps | `bun update` | `yarn up` |

## CI/CD Changes

### Before (Bun)
```yaml
- name: Setup Bun 1.x
  uses: oven-sh/setup-bun@v2
  with:
    bun-version: '1.2'

- name: Install dependencies
  run: bun install --frozen-lockfile
```

### After (Yarn)
```yaml
- name: Enable Corepack
  run: corepack enable

- name: Install dependencies
  run: yarn install --immutable
```

## Verification

After migration, all project functionality works correctly:

- ✅ `yarn install` - Completes in <1 second (with cache)
- ✅ `yarn typecheck` - TypeScript type checking passes
- ✅ `yarn build` - Production build succeeds
- ✅ CI workflows updated and functional
- ✅ Yarn 4.13.0 (latest stable) installed and verified

## Troubleshooting

### If you encounter issues:

1. **Clear everything and reinstall**
   ```bash
   rm -rf node_modules .yarn/cache .yarn/install-state.gz
   yarn install
   ```

2. **Ensure Corepack is enabled**
   ```bash
   corepack enable
   ```

3. **Check Node.js version**
   ```bash
   node --version  # Should be >= 20.0
   ```

4. **Verify Yarn version**
   ```bash
   yarn --version  # Should be 4.13.0
   ```

## Future Considerations

- **Keep Yarn updated**: Periodically run `yarn set version stable` to get the latest stable version
- **PnP mode**: Consider switching from `node-modules` to `pnp` for faster installs
- **Yarn plugins**: Explore workspace tools, interactive upgrade tools, etc.

## References

- [Yarn 4 Documentation](https://yarnpkg.com/)
- [Corepack Documentation](https://nodejs.org/api/corepack.html)
- [Migration from other package managers](https://yarnpkg.com/getting-started/migration)

---

**Migration Date**: March 2026  
**Migrated By**: Automated tooling  
**Status**: ✅ Complete and tested
