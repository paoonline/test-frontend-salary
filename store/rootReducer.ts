import {combineReducers} from 'redux';

import {AuthReducer} from './auth';
import {WithDrawReducer} from './withdraw';

export const rootReducer = combineReducers({
  auth: AuthReducer,
  withdraw: WithDrawReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
