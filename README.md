# React Confirmy (Under Development) ⚠️
> 🚧 This package is still in early development. Use at your own risk!

# React Confirmation Dialog

A beautiful, customizable confirmation dialog component for React applications with Tailwind CSS and Bootstrap support.

![Confirmation Dialog Preview](https://raw.githubusercontent.com/fariz-plugins/react-confirmy/refs/heads/main/banner.png)

## Features

- 🎨 Beautiful, modern design
- 🎯 Fully typed with TypeScript
- 🎭 Multiple themes (Tailwind CSS and Bootstrap)
- 📱 Responsive and mobile-friendly
- 🎪 Smart positioning with Popper.js
- ⌨️ Keyboard accessible
- 🎨 Highly customizable styles
- 🔧 Framework agnostic styling system

## Dependencies

### Core Dependencies
- `react` (^18.0.0): Core React library
- `react-dom` (^18.0.0): React DOM rendering
- `@popperjs/core` (^2.11.8): Handles positioning of the dialog
- `lucide-react` (^0.344.0): Provides icons for the dialog

### CSS Framework Dependencies (Optional)
Choose one:
1. **Tailwind CSS** (Default)
   - Install: `npm install -D tailwindcss postcss autoprefixer`
   - Initialize: `npx tailwindcss init -p`
   - Add to your CSS:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

2. **Bootstrap**
   - Install: `npm install bootstrap`
   - Import in your entry file:
     ```javascript
     import 'bootstrap/dist/css/bootstrap.min.css';
     ```

### Development Dependencies
- `typescript` (^5.0.0): TypeScript support
- `@types/react` (^18.0.0): React type definitions
- `@types/react-dom` (^18.0.0): React DOM type definitions

## Installation

### NPM
```bash
npm install react-confirmy
```
