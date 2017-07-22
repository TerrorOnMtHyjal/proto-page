import { createStore, combineReducers, applyMiddleware, compose }     from 'redux';
import { reducer as burgerMenu }                                      from 'redux-burger-menu';
import thunk                                                          from 'redux-thunk';
import appState                                                       from './reducers/appState';

const reducers = {
  burgerMenu,
  appState
};

const reducer = combineReducers(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers( applyMiddleware(thunk)));

export default store;