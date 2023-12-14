import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mini.css'
import { Provider } from './components/context';
import { store } from './Data/datastore';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/Error/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider value={store}>
      <div className='background-layer'>
      <ErrorBoundary>
        <BrowserRouter>
          <Header />
            <App />
          <Footer />
        </BrowserRouter>
      </ErrorBoundary>
      </div>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
