import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import listsReducer from '../slices/listsSlice';
import cardsReducer from '../slices/cardsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";

const persisConfig = {
    key: 'root',
    storage,
    whitelist: ['lists', 'cards'],
};

const rootReducer = combineReducers({
    lists: listsReducer,
    cards: cardsReducer,
});

const persistedReducer = persistReducer(persisConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
