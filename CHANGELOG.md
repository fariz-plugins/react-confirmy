# Changelog

All notable changes to this project will be documented in this file.

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
- lucide-react ^0.344.0
