import { createStore, compose } from 'redux';

export default function configureStore(rootReducer, middleware, initialState) {
  const enhancer = compose(
    ...middleware,
  );

  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}
