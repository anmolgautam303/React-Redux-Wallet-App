import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import App from './components/App';
import './index.css';

ReactDOM.render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <App />
    </Provider>,
    document.getElementById('root')
);