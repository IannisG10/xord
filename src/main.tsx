import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import { Provider } from 'react-redux';
import store from './redux/store/store.tsx';
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
