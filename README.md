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
- 🖼️ Built-in SVG icons with custom icon support
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
import { Confirmy, DialogProvider } from 'react-confirmy';

function App() {
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogProvider>
      <button ref={buttonRef} onClick={() => setIsOpen(true)}>
        Delete Item
      </button>

      <Confirmy
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

### Framework Support
The library supports multiple CSS frameworks out of the box:
- Tailwind CSS (default)
- Bootstrap
- Framework-agnostic option ('none')

Select your preferred framework using the `framework` prop:
```jsx
<Confirmy framework="tailwind" /> // or "bootstrap" or "none"
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
| `customIcon` | React.ComponentType<DialogIconProps> | undefined | Custom icon component |
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
<Confirmy
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

<Confirmy
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
<Confirmy
  onConfirm={async () => {
    await someAsyncOperation();
  }}
  asyncOptions={{
    loadingText: 'Processing...',
    successText: 'Success!',
    errorText: 'Error occurred',
    showLoadingSpinner: true
  }}
  // ... other props
/>
```

### Custom Icons

Use your own icons or the built-in SVG icons:

```jsx
// Using built-in icons (default)
<Confirmy type="warning" />

// Using custom icon
const CustomIcon = ({ width = 24, height = 24, color = 'currentColor' }) => (
  <svg width={width} height={height} fill={color}>
    {/* Your SVG path */}
  </svg>
);

<Confirmy customIcon={CustomIcon} />
```

### Dialog Queuing

Handle multiple dialogs with the queuing system:

```jsx
import { useDialog } from 'react-confirmy';

function MyComponent() {
  const { addDialog } = useDialog();

  const showDialogs = () => {
    // First dialog
    addDialog({
      title: 'First Action',
      message: 'Confirm first action?',
      onConfirm: () => {
        // Second dialog will show after first is confirmed
        addDialog({
          title: 'Second Action',
          message: 'Proceed with second action?',
          type: 'warning'
        });
      }
    });
  };

  return <button onClick={showDialogs}>Start Process</button>;
}
```

## TypeScript Support

The library is written in TypeScript and includes comprehensive type definitions. All components, hooks, and utilities are fully typed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT 
