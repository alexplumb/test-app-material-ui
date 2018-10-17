import { createStore, compose } from 'redux';

export default function configureStore(rootReducer, middleware, initialState) {
  const enhancer = compose(...middleware);
  return createStore(rootReducer, initialState, enhancer);
}
