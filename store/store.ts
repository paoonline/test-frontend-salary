import {configureStore} from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import {rootReducer} from './rootReducer';
import {persistStore} from 'redux-persist';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useReduxDispatch;

type RootState = ReturnType<typeof store.getState>;
const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export {store, useAppSelector, useAppDispatch};

export const persistor = persistStore(store);
