# Contributing to MORE Club Resource Center

Thank you for your interest in contributing to the MORE Club Resource Center! Whether you're fixing a typo, improving documentation, adding new content, or enhancing the codebase, your contributions help make off-road motorcycle riding safer and more accessible for everyone.

## 🚧 Founding Phase

The MORE Club is in its founding phase, which means your contributions have outsized impact! You're not just fixing bugs or adding features—you're helping establish the foundation of a community resource that will serve riders for years to come.

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Content Guidelines](#content-guidelines)
- [Code Guidelines](#code-guidelines)
- [Developer Certificate of Origin (DCO)](#developer-certificate-of-origin-dco)
- [Pull Request Process](#pull-request-process)
- [Community Guidelines](#community-guidelines)

## Ways to Contribute

### 📝 Content Contributions

- **Safety Guidelines:** Share expertise on safety practices, emergency procedures, or gear recommendations
- **Trail Information:** Add local trail details, maps, conditions, or access information
- **Riding Guides:** Create tutorials on techniques, maintenance, or trip planning
- **Blog Posts:** Share riding stories, trip reports, or community updates
- **Photography:** Contribute images of trails, events, or riding (with proper permissions)

### 💻 Technical Contributions

- **Bug Fixes:** Fix issues in the website, documentation, or build process
- **Features:** Add new functionality like search, maps integration, or community tools
- **Performance:** Improve site speed, accessibility, or SEO
- **Testing:** Add tests, improve CI/CD, or enhance quality checks
- **Documentation:** Improve technical documentation or setup guides

### 🎨 Design Contributions

- **UI/UX Improvements:** Enhance user experience and visual design
- **Accessibility:** Improve site accessibility for all users
- **Mobile Experience:** Optimize for mobile devices
- **Graphics:** Create logos, icons, or branded materials

### 🐛 Issue Reporting

- **Bug Reports:** Report technical issues or broken links
- **Content Issues:** Flag outdated, incorrect, or missing information
- **Feature Requests:** Suggest new features or improvements
- **Accessibility Issues:** Report accessibility barriers

## Getting Started

### Prerequisites

- **Node.js 22+** (we test with Node.js 22.x)
- **Yarn 4.13.0** (managed via Corepack)
- **Git** for version control
- **GitHub Account** for contributions

### Initial Setup

1. **Fork the repository** on GitHub
2. **Clone your fork locally:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ride-more-org.git
   cd ride-more-org
   ```

3. **Enable Corepack** (if not already enabled):
   ```bash
   corepack enable
   ```

4. **Install dependencies:**
   ```bash
   yarn install
   ```

5. **Start the development server:**
   ```bash
   yarn start
   ```
   
   Your local site should now be running at `http://localhost:3000`

6. **Configure git for DCO sign-offs:**
   ```bash
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```

## Development Workflow

### 1. Create a Feature Branch

Always create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
```

**Branch Naming Conventions:**
- `feature/description` - New features or content
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `style/description` - Code style/formatting changes
- `refactor/description` - Code refactoring
- `test/description` - Test additions or improvements

### 2. Make Your Changes

- Write clear, well-commented code
- Follow existing code style and conventions
- Test your changes locally
- Keep commits focused and atomic

### 3. Test Your Changes

```bash
# Type check
yarn typecheck

# Build to verify no errors
yarn build

# Preview the production build
yarn serve
```

### 4. Commit with DCO Sign-off

**IMPORTANT:** All commits must include a DCO sign-off. Use the `-s` flag:

```bash
git commit -s -m "feat: add trail safety checklist"
```

See [DCO section](#developer-certificate-of-origin-dco) below for details.

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to the original repository on GitHub
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill out the PR template with clear description
5. Submit the pull request

## Content Guidelines

### Writing Style

**Tone:**
- Friendly but professional
- Encouraging without overpromising
- Safety-conscious without being alarmist
- Inclusive and welcoming to all skill levels

**Language:**
- Use clear, accessible language (8th-grade reading level)
- Define technical terms when first used
- Use active voice when possible
- Keep sentences and paragraphs concise

**Structure:**
- Use descriptive headers and subheaders
- Break content into scannable sections
- Use bullet points for lists
- Include relevant links to authoritative sources

### Safety Content Standards

When writing about safety:

1. **Accuracy First:** Only include information you're confident is correct
2. **Source Your Claims:** Link to authoritative sources when possible
3. **Be Specific:** Provide actionable, concrete guidance
4. **Acknowledge Limitations:** Note when professional training is recommended
5. **Update Regularly:** Flag content that may need periodic review

### Trail Information Standards

When adding trail information:

- **Accuracy:** Verify information is current and correct
- **Permissions:** Only share trails on public or authorized lands
- **Conditions:** Include seasonal considerations and current status
- **Difficulty:** Provide honest difficulty assessments
- **Access:** Include parking, permits, fees, and restrictions
- **Environmental:** Note sensitive areas or seasonal closures

### Markdown Formatting

We use standard Markdown with some Docusaurus extensions:

```markdown
# Page Title (H1 - only one per page)

## Section Header (H2)

### Subsection (H3)

**Bold text** for emphasis
*Italic text* for terms
`code` for technical terms
[Link text](https://example.com)

> Note or callout boxes use blockquotes

- Unordered lists
- Use hyphens

1. Ordered lists
2. Use numbers
```

## Code Guidelines

### TypeScript/JavaScript

- Use TypeScript for new components
- Follow existing code style
- Add JSDoc comments for functions
- Use meaningful variable names
- Avoid deeply nested code

### React Components

```tsx
// Use functional components with hooks
import React from 'react';

export function ComponentName({ prop1, prop2 }) {
  // Component logic
  
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}
```

### CSS/Styling

- Use Docusaurus theme variables when possible
- Keep custom CSS minimal and scoped
- Ensure responsive design (mobile-first)
- Test on multiple screen sizes

### Accessibility

- Use semantic HTML elements
- Include alt text for images
- Ensure keyboard navigation works
- Maintain proper heading hierarchy
- Test with screen readers when possible

## Developer Certificate of Origin (DCO)

### What is DCO?

The Developer Certificate of Origin (DCO) is a lightweight way to certify that you wrote or have the right to submit the code you're contributing.

### DCO Text

By making a contribution to this project, you certify that:

```
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
```

### How to Sign Your Commits

**Automatic Sign-off:**
```bash
git commit -s -m "Your commit message"
```

This adds the following line to your commit message:
```
Signed-off-by: Your Name <your.email@example.com>
```

**Configure Git to Always Sign:**
```bash
# You can create a git alias
git config alias.ci 'commit -s'

# Then use: git ci -m "message"
```

**Signing Previous Commits:**

If you forgot to sign off previous commits:
```bash
# For the last commit
git commit --amend -s

# For multiple commits (rebase last 3)
git rebase HEAD~3 --signoff

# Force push to your branch
git push --force-with-lease origin your-branch-name
```

### DCO Check

Our CI pipeline automatically checks that all commits are signed off. Pull requests without proper DCO sign-offs will not be merged.

## Pull Request Process

### Before Submitting

- ✅ All commits are signed off (DCO)
- ✅ Code builds successfully (`yarn build`)
- ✅ Changes tested locally
- ✅ No merge conflicts with main branch
- ✅ Follows our coding and content standards

### PR Description Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Content update
- [ ] Documentation
- [ ] Performance improvement
- [ ] Code refactoring

## Changes Made
- Specific change 1
- Specific change 2
- Specific change 3

## Testing
How you tested these changes

## Screenshots (if applicable)
Add screenshots for visual changes

## Related Issues
Closes #issue_number (if applicable)

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where needed
- [ ] I have updated documentation as needed
- [ ] My changes generate no new warnings
- [ ] All commits are signed off (DCO)
```

### Review Process

1. **Automated Checks:** CI runs build, lint, security scans, and DCO check
2. **Code Review:** Maintainers review your changes
3. **Feedback:** You may receive requests for changes
4. **Approval:** Once approved, your PR will be merged
5. **Deployment:** Changes deploy automatically to production

### Response Times

As a volunteer-run project in founding phase:
- Initial review: Within 5-7 days
- Follow-up reviews: Within 3-5 days
- We appreciate your patience!

## Community Guidelines

### Communication

**Be Kind and Respectful:**
- Assume good intentions
- Welcome newcomers warmly
- Provide constructive feedback
- Respect different perspectives

**Be Clear and Concise:**
- Use clear language
- Stay on topic
- Provide context for issues
- Ask questions when unsure

**Be Patient:**
- Remember this is volunteer-run
- Contributors have varying availability
- Some changes take time to review
- Complex features may need discussion

### Getting Help

**Questions About Contributing?**
- Check existing issues and PRs first
- Read this guide thoroughly
- Ask in GitHub Discussions
- Email: more@ride-more.org

**Technical Issues?**
- Search existing issues
- Provide detailed reproduction steps
- Include error messages and logs
- Mention your environment (OS, Node version, etc.)

## Recognition

### Contributors

All contributors are recognized in our community:
- Listed in project contributors
- Mentioned in release notes (for significant contributions)
- Building reputation in open source
- Making a real impact on rider safety

### Founding Contributors

Those who contribute during our founding phase will be recognized as founding contributors—part of the core group that established the MORE Club Resource Center.

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (see LICENSE file).

## Questions?

Still have questions? We're here to help!

- **Email:** more@ride-more.org
- **Issues:** [GitHub Issues](https://github.com/bcdady/ride-more-org/issues)
- **Discussions:** [GitHub Discussions](https://github.com/bcdady/ride-more-org/discussions)

---

**Thank you for contributing to the MORE Club Resource Center! Together, we're making off-road riding safer and more accessible for everyone.**