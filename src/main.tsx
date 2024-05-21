import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx';

const rootElement = document.getElementById("root");

if (rootElement){
  const root = createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  console.error('root element not found');
}
