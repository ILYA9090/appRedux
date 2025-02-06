import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import { apiApp } from './apiApp';
/*import { 
  persistStore,
   persistReducer,
   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
   } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
*/

const store = configureStore({
  reducer: {
    taskStore: tasksReducer,
    [apiApp.reducerPath]: apiApp.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiApp.middleware),
});
export default store;

/*const rootReducer = combineReducers({taskStore: tasksReducer})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    persistedReducer,
    [apiApp.reducerPath] : apiApp.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),).concat(apiApp.middleware),
 
});

export const persistor = persistStore(store);
export default store;
*/
