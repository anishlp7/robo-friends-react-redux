import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import './index.css';
import App from './containers/App';
import {searchRobots,requestRobots} from './reducers';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const rootReducer = combineReducers({searchRobots,requestRobots})
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, document.getElementById('root'));
registerServiceWorker();
