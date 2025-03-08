# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-03-08

### Breaking Changes
- **Type Names**
  - Added 'Dialog' prefix to all form-related types
  - `StyleConfig` is now `DialogStyleConfig`
  - `AnimationConfig` is now `DialogAnimationConfig`
  - `AsyncConfirmOptions` is now `DialogAsyncOptions`
  - Position, size, and framework types are now `DialogPosition`, `DialogSize`, and `DialogFramework`

### Migration Guide
To upgrade to version 1.1.0:
1. Update all type imports to use the new 'Dialog' prefixed names
2. If importing directly from `src/index.tsx`, update imports to use the main entry point `src/index.ts`
3. No changes required to component props or functionality, only type definitions are affected

### Changed
- **Code Organization**
  - Moved component implementation from `src/index.tsx` to `src/components/Confirmy.tsx`
  - Centralized all exports through `src/index.ts`
  - Improved type naming convention using 'Dialog' prefix (e.g., 'DialogFormField')
  - Separated styles and utilities into their respective directories

### Fixed
- Removed duplicate Confirmy component implementation
- Simplified main entry point to handle exports and context only

## [1.0.3] - 2025-03-08
[docs: update documentation]
- Remove framework installation steps from README
- Simplify framework support section
- Add version 1.0.3 changes to CHANGELOG
- Update dependencies list
- Remove lucide-react references

## [1.0.2] - 2025-03-08

### Changed
- **Dependencies**
  - Removed `lucide-react` dependency
  - Replaced with built-in SVG icons for better bundle size

### Improved
- **Code Organization**
  - Moved DialogContext to dedicated contexts directory
  - Separated DialogProvider and useDialog into their own files
  - Updated exports in index.ts to maintain centralized exports
  - Followed Dialog prefix naming convention for types
  - Fixed Fast Refresh warning by separating component exports

### Fixed
- TypeScript type definitions and import paths
- Component organization following project guidelines

## [1.0.0] - 2025-03-04

### Features
- **Framework Support**
  - Tailwind CSS integration
  - Bootstrap integration
  - Framework-agnostic option ('none')

- **Dialog Customization**
  - Multiple dialog types: 'danger', 'warning', 'info'
  - Customizable dialog sizes: 'sm', 'md', 'lg'
  - Flexible positioning: 'top', 'bottom', 'left', 'right'
  - Dark mode support
  - Custom icon support
  - Customizable styles for all components

- **Animation System**
  - Built-in animations: 'fade', 'scale', 'slide'
  - Configurable animation duration and timing
  - Support for custom keyframes
  - Smooth transitions

- **Form Integration**
  - Dynamic form field support
  - Multiple input types: text, textarea, checkbox, radio, select
  - Form validation
  - Custom field validation
  - Required field handling
  - Form data management

- **Async Operations**
  - Promise-based confirmations
  - Loading state management
  - Success/Error state handling
  - Configurable timeout
  - Custom loading/success/error messages

- **Accessibility**
  - Keyboard navigation support
  - ARIA attributes for screen readers
  - Focus management
  - Click outside handling
  - ESC key to close

- **Advanced Features**
  - Nested dialogs support
  - Z-index management
  - Popper.js integration for positioning
  - Stack order control
  - TypeScript support

### Improvements
- Improved type definitions
- Better error handling in form validation
- Enhanced dialog positioning with Popper.js
- Optimized animation performance

### Dependencies
- React >=18.0.0
- React DOM >=18.0.0
- @popperjs/core ^2.11.8
