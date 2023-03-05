import {combineReducers} from 'redux';

import {AuthReducer} from './auth';
import {MainReducer} from './main';

export const rootReducer = combineReducers({
  auth: AuthReducer,
  main: MainReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
