import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './react/redux/configureStore';
import App from './react/components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider configureStore={configureStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);
