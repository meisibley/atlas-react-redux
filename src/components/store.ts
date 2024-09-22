import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import listsReducer from '../slices/listsSlice';
import cardsReducer from '../slices/cardsSlice';

export const store = configureStore({
    reducer: {
        lists: listsReducer,
        cards: cardsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
