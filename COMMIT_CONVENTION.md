# Commit Message Convention

This document defines the commit message format for the React Confirmy project. Following these guidelines ensures consistent commit history and enables automated versioning and changelog generation.

## Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Types

The `type` field must be one of the following:

- **feat**: A new feature or enhancement
- **fix**: A bug fix
- **docs**: Documentation changes only
- **style**: Changes that don't affect code functionality (formatting, white-space, etc.)
- **refactor**: Code changes that neither fix a bug nor add a feature
- **perf**: Performance improvements
- **test**: Adding or correcting tests
- **build**: Changes to build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit
- **deps**: Dependency updates

## Scopes

The `scope` field is optional but recommended. It should specify the part of the codebase affected by the change:

- **core**: Core functionality
- **components**: Component-related changes
- **hooks**: Hook-related changes
- **styles**: Styling system changes
- **types**: TypeScript type definitions
- **utils**: Utility functions
- **animations**: Animation-related changes
- **icons**: Icon-related changes
- **docs**: Documentation
- **examples**: Example code
- **tests**: Test-related changes
- **deps**: Dependencies
- **config**: Configuration files
- **release**: Release-related changes

## Subject

The `subject` is a short description of the change:

- Use imperative, present tense: "add" not "added" or "adds"
- Don't capitalize the first letter
- No period (.) at the end
- Keep it under 72 characters
- Be clear and descriptive

## Body

The `body` is optional and should provide detailed context about the change:

- Use imperative, present tense
- Include motivation for the change
- Contrast with previous behavior
- Wrap lines at 72 characters

## Footer

The `footer` is optional and should reference GitHub issues that this commit closes or is related to:

- `Closes #123, #456` to close issues
- `Related to #789` to reference related issues
- `BREAKING CHANGE: <description>` to indicate breaking changes

## Examples

```
feat(components): add dark mode support to Confirmy component

Implement dark mode styling with automatic detection of system preferences.
Add new darkMode prop to control the appearance.

Closes #42
```

```
fix(hooks): resolve useDialogPosition positioning issue

Fix incorrect calculation of dialog position when the trigger element is near the viewport edge.

Closes #123
```

```
docs(readme): update installation instructions

Add detailed instructions for different package managers and frameworks.
```

```
refactor(utils): improve animation performance

Optimize animation calculations to reduce unnecessary re-renders.
```

```
feat(core): add support for form fields in dialogs

Implement form field validation and data collection in confirmation dialogs.
Add new formFields prop to configure form inputs.

BREAKING CHANGE: onConfirm callback now receives form data as its first argument
Closes #234
```

## Breaking Changes

Breaking changes must be indicated in the footer with the `BREAKING CHANGE:` prefix, followed by a description of what has changed and how to migrate.

## Revert Commits

If the commit reverts a previous commit, it should begin with `revert:` followed by the header of the reverted commit. The body should say: `This reverts commit <hash>.`

```
revert: feat(components): add dark mode support

This reverts commit abc123def456.
```

## Tooling

This project uses [commitlint](https://commitlint.js.org/) to enforce these conventions. The configuration can be found in `commitlint.config.mjs`.