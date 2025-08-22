import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './components/Button';

// Eenvoudige test component
const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">BOLDYASE Shopify Theme</h1>
      <Button>Test Button</Button>
    </div>
  );
};

// Render functie
const renderComponent = (elementId: string) => {
  const container = document.getElementById(elementId);
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
};

// Initialiseer app wanneer DOM geladen is
document.addEventListener('DOMContentLoaded', () => {
  renderComponent('boldyase-app');
});

// Maak render functie globaal beschikbaar
(window as any).renderBOLDYASEComponent = renderComponent;
