import React, { useRef, useState } from 'react';
import { Confirmy, DialogProvider, useDialog } from './index';
import { CopyIcon } from './components/icons';

const Header = () => (
  <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold mb-4">React Confirmy</h1>
      <p className="text-xl mb-8 opacity-90">
        A beautiful, customizable confirmation dialog component for React applications
      </p>
      
      <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Installation</h2>
          <button 
            onClick={() => navigator.clipboard.writeText('npm install react-confirmy')}
            className="flex items-center gap-2 px-3 py-1 bg-white bg-opacity-10 rounded hover:bg-opacity-20"
          >
            <CopyIcon width={16} height={16} /> Copy
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm opacity-70 mb-2">Using npm:</p>
            <code className="bg-black bg-opacity-50 px-4 py-2 rounded block">
              npm install react-confirmy
            </code>
          </div>
          <div>
            <p className="text-sm opacity-70 mb-2">Using yarn:</p>
            <code className="bg-black bg-opacity-50 px-4 py-2 rounded block">
              yarn add react-confirmy
            </code>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CodeBlock = ({ code }: { code: string }) => (
  <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
    <code>{code}</code>
  </pre>
);

const DemoSection = ({ title, description, code, children }: { 
  title: string; 
  description: string;
  code: string;
  children: React.ReactNode 
}) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="p-6 border rounded-lg bg-white shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Live Demo</h3>
        {children}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Code Example</h3>
        <CodeBlock code={code} />
      </div>
    </div>
  </div>
);

// Basic Dialog Demo
const BasicDialog = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Dialog
      </button>
      <Confirmy
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
        triggerRef={buttonRef}
        title="Basic Dialog"
        message="This is a basic confirmation dialog"
        type="info"
        position="bottom"
      />
    </>
  );
};

const basicDialogCode = `
const BasicDialog = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(true)}
      >
        Show Dialog
      </button>
      <Confirmy
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
        triggerRef={buttonRef}
        title="Basic Dialog"
        message="This is a basic confirmation dialog"
        type="info"
        position="bottom"
      />
    </>
  );
};
`;

// Queue Demo Component
const QueueDemo = () => {
  const { addDialog } = useDialog();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const showQueuedDialogs = () => {
    addDialog({
      isOpen: true,
      triggerRef: buttonRef,
      title: "First Action",
      message: "This is the first dialog in the queue",
      type: "info",
      onClose: () => console.log("First dialog closed"),
      onConfirm: () => console.log("First dialog confirmed"),
      position: "bottom"
    });

    addDialog({
      isOpen: true,
      triggerRef: buttonRef,
      title: "Second Action",
      message: "This is the second dialog in the queue",
      type: "warning",
      onClose: () => console.log("Second dialog closed"),
      onConfirm: () => console.log("Second dialog confirmed"),
      position: "bottom"
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={showQueuedDialogs}
      className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
    >
      Show Queue
    </button>
  );
};

const queueDemoCode = `
const QueueDemo = () => {
  const { addDialog } = useDialog();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const showQueuedDialogs = () => {
    addDialog({
      isOpen: true,
      triggerRef: buttonRef,
      title: "First Action",
      message: "First dialog in queue",
      type: "info",
      position: "bottom"
    });

    addDialog({
      isOpen: true,
      triggerRef: buttonRef,
      title: "Second Action",
      message: "Second dialog in queue",
      type: "warning",
      position: "bottom"
    });
  };

  return (
    <button ref={buttonRef} onClick={showQueuedDialogs}>
      Show Queue
    </button>
  );
};
`;

const App = () => {
  return (
    <DialogProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <DemoSection 
            title="Basic Usage" 
            description="A simple confirmation dialog with basic configuration"
            code={basicDialogCode}
          >
            <BasicDialog />
          </DemoSection>

          <DemoSection 
            title="Dialog Queue" 
            description="Show multiple dialogs in sequence using the dialog queue system"
            code={queueDemoCode}
          >
            <QueueDemo />
          </DemoSection>
        </div>

        {/* Props Table at the bottom */}
        <div className="container mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold mb-6">Available Props</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left">Prop</th>
                  <th className="px-6 py-3 text-left">Type</th>
                  <th className="px-6 py-3 text-left">Default</th>
                  <th className="px-6 py-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4 font-medium">isOpen</td>
                  <td className="px-6 py-4">boolean</td>
                  <td className="px-6 py-4">required</td>
                  <td className="px-6 py-4">Controls dialog visibility</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-6 py-4 font-medium">position</td>
                  <td className="px-6 py-4">'top' | 'bottom' | 'left' | 'right'</td>
                  <td className="px-6 py-4">'bottom'</td>
                  <td className="px-6 py-4">Position relative to trigger element</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 font-medium">type</td>
                  <td className="px-6 py-4">'danger' | 'warning' | 'info'</td>
                  <td className="px-6 py-4">'warning'</td>
                  <td className="px-6 py-4">Dialog type affecting colors and icon</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="px-6 py-4 font-medium">size</td>
                  <td className="px-6 py-4">'sm' | 'md' | 'lg'</td>
                  <td className="px-6 py-4">'md'</td>
                  <td className="px-6 py-4">Dialog size</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 font-medium">animation</td>
                  <td className="px-6 py-4">AnimationConfig</td>
                  <td className="px-6 py-4">scale</td>
                  <td className="px-6 py-4">Animation configuration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DialogProvider>
  );
};

export default App;