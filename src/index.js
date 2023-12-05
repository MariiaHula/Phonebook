import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer autoClose={1500} />

    <BrowserRouter basename="/Phonebook">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </>
);
