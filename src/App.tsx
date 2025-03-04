import React, { useRef, useState } from 'react';
import Confirmy, { DialogProvider, useDialog } from './index';
import { AlertTriangle, AlertOctagon, Info, Trash2, Settings, UserPlus } from 'lucide-react';

const DemoSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  </div>
);

const DemoCard = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 border rounded-lg bg-white shadow-sm">
    {children}
  </div>
);

const AnimationDemo = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState<'fade' | 'scale' | 'slide'>('fade');

  return (
    <DemoCard>
      <div className="flex flex-col gap-2">
        <select
          value={animation}
          onChange={(e) => setAnimation(e.target.value as any)}
          className="mb-2 p-2 border rounded"
        >
          <option value="fade">Fade</option>
          <option value="scale">Scale</option>
          <option value="slide">Slide</option>
        </select>
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Animation: {animation}
        </button>
      </div>
      <Confirmy
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => alert('Confirmed!')}
        triggerRef={buttonRef}
        animation={{
          type: animation,
          duration: 200,
          timing: 'ease-out'
        }}
      />
    </DemoCard>
  );
};

const FormDemo = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const formFields = [
    {
      type: 'text' as const,
      name: 'username',
      label: 'Username',
      required: true,
      validation: (value: string) =>
        value && value.length < 3 ? 'Username must be at least 3 characters' : undefined
    },
    {
      type: 'select' as const,
      name: 'role',
      label: 'Role',
      required: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Guest', value: 'guest' }
      ]
    },
    {
      type: 'textarea' as const,
      name: 'notes',
      label: 'Notes',
      required: false
    }
  ];

  return (
    <DemoCard>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Form Dialog
      </button>
      <Confirmy
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={(data) => {
          alert('Form submitted with data: ' + JSON.stringify(data, null, 2));
        }}
        triggerRef={buttonRef}
        title="Create User"
        message="Please fill in the user details"
        type="info"
        formFields={formFields}
        size="lg"
        customIcon={UserPlus}
      />
    </DemoCard>
  );
};

const AsyncDemo = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const asyncConfirm = () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve() : reject();
      }, 2000);
    });
  };

  return (
    <DemoCard>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Async Dialog
      </button>
      <Confirmy
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={asyncConfirm}
        triggerRef={buttonRef}
        title="Process Action"
        type="warning"
        asyncOptions={{
          loadingText: 'Processing...',
          successText: 'Action completed!',
          errorText: 'Failed to complete action',
          timeout: 3000
        }}
      />
    </DemoCard>
  );
};

const NestedDemo = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);
  const nestedButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <DemoCard>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      >
        Nested Dialog
      </button>
      <Confirmy
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {}}
        triggerRef={buttonRef}
        title="Settings"
        type="info"
        customIcon={Settings}
      >
        <button
          ref={nestedButtonRef}
          onClick={() => setNestedOpen(true)}
          className="px-3 py-1.5 bg-red-500 text-white rounded text-sm"
        >
          Delete Account
        </button>
        <Confirmy
          isOpen={nestedOpen}
          onClose={() => setNestedOpen(false)}
          onConfirm={() => alert('Account deleted')}
          triggerRef={nestedButtonRef}
          title="Delete Account"
          message="Are you sure you want to delete your account? This action cannot be undone."
          type="danger"
          customIcon={Trash2}
          nested={true}
          parentId="settings-dialog"
        />
      </Confirmy>
    </DemoCard>
  );
};

const QueueDemo = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { addDialog } = useDialog();

  const showQueuedDialogs = () => {
    // Add multiple dialogs to the queue
    ['info', 'warning', 'danger'].forEach((type, index) => {
      setTimeout(() => {
        addDialog({
          id: `dialog-${index}`,
          props: {
            isOpen: true,
            onClose: () => {},
            onConfirm: () => {},
            triggerRef: buttonRef,
            title: `Dialog ${index + 1}`,
            message: `This is dialog ${index + 1} in the queue`,
            type: type as any,
            stackOrder: index
          }
        });
      }, index * 500);
    });
  };

  return (
    <DemoCard>
      <button
        ref={buttonRef}
        onClick={showQueuedDialogs}
        className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
      >
        Show Queue
      </button>
    </DemoCard>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DialogProvider>
      <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">React Confirmy Demo</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded-lg ${
                darkMode
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Toggle {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>

          <DemoSection title="Animations">
            <AnimationDemo />
          </DemoSection>

          <DemoSection title="Forms">
            <FormDemo />
          </DemoSection>

          <DemoSection title="Async Operations">
            <AsyncDemo />
          </DemoSection>

          <DemoSection title="Nested Dialogs">
            <NestedDemo />
          </DemoSection>

          <DemoSection title="Dialog Queue">
            <QueueDemo />
          </DemoSection>
        </div>
      </div>
    </DialogProvider>
  );
}