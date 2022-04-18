import { compose, createStore, applyMiddleware } from "redux";
import { logger } from 'redux-logger';
import { rootReducer } from "./root-reducer";

const middlewares = [logger];

const combinedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, combinedEnhancers)