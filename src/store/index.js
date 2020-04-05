import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import application from "./application/application.reducer";

// create root reducer of all others. This is application state

const rootReducer = combineReducers({
  application
});

// Enable redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Export store (state) so we can use it in <Provider> or store.dispatch(action)
export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
