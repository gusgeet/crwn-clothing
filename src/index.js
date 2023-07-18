import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';

import App from './App';
import { store, persistor } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App /> 
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
);
