import { createStore } from 'redux';
import rootReducer from './reducers';

// export const store = createStore(rootReducer);

// with REDUX_DEVTOOLS_EXTENSION
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
