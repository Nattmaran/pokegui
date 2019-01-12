import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './stores'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

