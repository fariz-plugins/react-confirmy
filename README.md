# React Confirmy

A beautiful, customizable, and accessible confirmation dialog component for React applications with built-in support for Tailwind CSS and Bootstrap.

![Confirmation Dialog Preview](https://raw.githubusercontent.com/fariz-plugins/react-confirmy/refs/heads/main/banner.png)

## Features

- 🎨 Beautiful, modern design with dark mode support
- 🎯 Fully typed with TypeScript
- 🎭 Multiple themes (Tailwind CSS and Bootstrap)
- 📱 Responsive and mobile-friendly
- 🎪 Smart positioning with Popper.js
- ⌨️ Keyboard accessible with focus trap
- 🎨 Highly customizable styles and animations
- 🔧 Framework agnostic styling system
- 🌙 Dark mode support
- 📏 Multiple size variants (sm, md, lg)
- 🎯 Custom positioning (top, bottom, left, right)
- 🖼️ Custom icon support with Lucide icons
- ✨ Multiple animation types (fade, scale, slide)
- 📝 Form support with validation
- ⏳ Async operations with loading states
- 🔄 Dialog queuing system
- 📦 Nested dialogs support
- 🎯 Smart positioning with arrow indicators
- 🔒 TypeScript strict mode support
- 🎨 Custom animation keyframes support
- 🌐 Framework-agnostic option

## Installation

```bash
npm install react-confirmy
```

## Quick Start

```jsx
import { useRef } from 'react';
import { ConfirmationDialog, DialogProvider } from 'react-confirmy';

function App() {
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogProvider>
      <button ref={buttonRef} onClick={() => setIsOpen(true)}>
        Delete Item
      </button>

      <ConfirmationDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          // Handle confirmation
          console.log('Confirmed!');
        }}
        triggerRef={buttonRef}
        type="danger"
        title="Delete Item"
        message="Are you sure you want to delete this item? This action cannot be undone."
      />
    </DialogProvider>
  );
}
```

## Dependencies

### Core Dependencies
- `react` (^18.0.0): Core React library
- `react-dom` (^18.0.0): React DOM rendering
- `@popperjs/core` (^2.11.8): Handles positioning of the dialog
- `lucide-react` (^0.344.0): Provides icons for the dialog

### CSS Framework Dependencies (Optional)
Choose one:

1. **Tailwind CSS** (Default)
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   Add to your CSS:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. **Bootstrap**
   ```bash
   npm install bootstrap
   ```
   Import in your entry file:
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | boolean | required | Controls the visibility of the dialog |
| `onClose` | () => void | required | Function called when the dialog should close |
| `onConfirm` | (formData?: Record<string, any>) => void \| Promise<void> | required | Function called when the user confirms the action |
| `triggerRef` | React.RefObject<HTMLElement> | required | Reference to the trigger element |
| `title` | string | 'Confirm Action' | Dialog title |
| `message` | string | 'Are you sure you want to proceed?' | Dialog message |
| `confirmText` | string | 'Confirm' | Text for the confirm button |
| `cancelText` | string | 'Cancel' | Text for the cancel button |
| `type` | 'danger' \| 'warning' \| 'info' | 'warning' | Sets the dialog type and styling |
| `size` | 'sm' \| 'md' \| 'lg' | 'md' | Controls the dialog size |
| `position` | 'top' \| 'bottom' \| 'left' \| 'right' | 'top' | Sets the dialog position relative to the trigger |
| `framework` | 'tailwind' \| 'bootstrap' \| 'none' | 'tailwind' | Specifies the CSS framework to use |
| `styles` | Partial<StyleConfig> | {} | Custom styles override |
| `className` | string | '' | Additional CSS classes |
| `darkMode` | boolean | false | Enables dark mode |
| `customIcon` | LucideIcon | undefined | Custom icon component from lucide-react |
| `animation` | AnimationConfig | { type: 'scale', duration: 200, timing: 'ease-out' } | Animation configuration |
| `zIndex` | number | 50 | Sets the z-index of the dialog |
| `formFields` | DialogFormField[] | [] | Form fields configuration |
| `asyncOptions` | AsyncConfirmOptions | undefined | Async operation configuration |
| `stackOrder` | number | 0 | Order in the dialog stack |
| `nested` | boolean | false | Whether this is a nested dialog |
| `parentId` | string | undefined | ID of the parent dialog |

## Advanced Features

### Animations

Configure custom animations with the `animation` prop:

```jsx
<ConfirmationDialog
  animation={{
    type: 'fade', // 'fade' | 'scale' | 'slide' | 'none'
    duration: 200,
    timing: 'ease-out',
    customKeyframes: '' // Optional custom animation
  }}
  // ... other props
/>
```

### Form Support

Add form fields to your dialog with validation:

```jsx
const formFields = [
  {
    type: 'text',
    name: 'username',
    label: 'Username',
    required: true,
    placeholder: 'Enter username',
    validation: (value) => 
      value.length < 3 ? 'Username must be at least 3 characters' : undefined
  },
  {
    type: 'select',
    name: 'role',
    label: 'Role',
    options: [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' }
    ]
  },
  {
    type: 'checkbox',
    name: 'terms',
    label: 'Accept Terms',
    required: true
  }
];

<ConfirmationDialog
  formFields={formFields}
  onConfirm={(data) => {
    console.log('Form data:', data);
  }}
  // ... other props
/>
```

### Async Operations

Handle async operations with loading and status states:

```jsx
<ConfirmationDialog
  onConfirm={async () => {
    await someAsyncOperation();
  }}
  asyncOptions={{
    loadingText: 'Processing...',
    successText: 'Success!',
    errorText: 'Error occurred',
    timeout: 3000
  }}
  // ... other props
/>
```

### Dialog Queue

Use the `DialogProvider` and `useDialog` hook to manage multiple dialogs:

```jsx
import { DialogProvider, useDialog } from 'react-confirmy';

function DialogManager() {
  const { addDialog, removeDialog, updateDialog } = useDialog();

  const showDialogs = () => {
    addDialog({
      id: 'dialog-1',
      props: {
        isOpen: true,
        title: 'First Dialog',
        onConfirm: () => {
          // Show next dialog
          addDialog({
            id: 'dialog-2',
            props: {
              isOpen: true,
              title: 'Second Dialog',
              // ... other props
            }
          });
        }
        // ... other props
      }
    });
  };

  return (
    <button onClick={showDialogs}>
      Show Dialogs
    </button>
  );
}

function App() {
  return (
    <DialogProvider>
      <DialogManager />
    </DialogProvider>
  );
}
```

### Nested Dialogs

Create nested dialogs with proper stacking and focus management:

```jsx
<ConfirmationDialog
  isOpen={isOpen}
  // ... other props
>
  <button onClick={() => setNestedOpen(true)}>
    Open Nested Dialog
  </button>
  <ConfirmationDialog
    isOpen={nestedOpen}
    nested={true}
    parentId="parent-dialog"
    stackOrder={1}
    // ... other props
  />
</ConfirmationDialog>
```

## Style Customization

### Framework-specific Styles

1. **Tailwind CSS**
```jsx
<ConfirmationDialog
  framework="tailwind"
  styles={{
    container: 'bg-white dark:bg-gray-800 rounded-lg shadow-xl',
    title: 'text-xl font-semibold text-gray-900 dark:text-white',
    message: 'text-gray-600 dark:text-gray-300',
    confirmButton: {
      danger: 'bg-red-600 hover:bg-red-700',
      warning: 'bg-yellow-600 hover:bg-yellow-700',
      info: 'bg-blue-600 hover:bg-blue-700'
    }
  }}
/>
```

2. **Bootstrap**
```jsx
<ConfirmationDialog
  framework="bootstrap"
  styles={{
    container: 'modal-content',
    title: 'modal-title',
    message: 'modal-body',
    confirmButton: {
      danger: 'btn btn-danger',
      warning: 'btn btn-warning',
      info: 'btn btn-info'
    }
  }}
/>
```

3. **Framework Agnostic**
```jsx
<ConfirmationDialog
  framework="none"
  styles={{
    container: 'your-container-class',
    title: 'your-title-class',
    message: 'your-message-class',
    confirmButton: {
      danger: 'your-danger-button-class',
      warning: 'your-warning-button-class',
      info: 'your-info-button-class'
    }
  }}
/>
```

## Accessibility Features

React Confirmy is built with accessibility in mind:

- ♿️ WAI-ARIA compliant dialog implementation
- ⌨️ Full keyboard navigation support
  - Tab: Navigate through focusable elements
  - Shift+Tab: Navigate backwards
  - Escape: Close dialog
  - Enter/Space: Activate buttons
- 🔍 Focus trap within the dialog
- 📢 Screen reader announcements for status changes
- 🎯 Proper focus management
  - Focus restored to trigger element on close
  - Nested dialog focus handling
- 🎨 High contrast mode support
- 📱 Touch device support

## TypeScript Support

React Confirmy is written in TypeScript and provides comprehensive type definitions:

```typescript
import type {
  ConfirmationDialogProps,
  DialogFormField,
  AsyncConfirmOptions,
  StyleConfig,
  AnimationConfig
} from 'react-confirmy';
```

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your PR adheres to the following guidelines:
- Follow the existing code style
- Add tests for any new functionality
- Update documentation as needed
- Keep PR size reasonable

## License

MIT © [M Mohamed Fariz](https://github.com/fariz-plugins)
