import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CardItem {
    id: string;
    title: string;
    description: string;
    listId: string;
}

interface CardsState {
    cardItems: CardItem[];
}

const initialState: CardsState = {
    cardItems: [],
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        createCard: (state, action: PayloadAction<{ title: string; description: string; listId: string }>) => {
            const newCard: CardItem = {
                id: Date.now().toString(),
                title: action.payload.title,
                description: action.payload.description,
                listId: action.payload.listId,
            };
            state.cardItems.push(newCard);
        },
        deleteCard: (state, action: PayloadAction<{ id: string }>) => {
            state.cardItems = state.cardItems.filter(card => card.id !== action.payload.id);
        },
        clearBoard: (state) => {
            state.cardItems = [];
        },
    },
});

export const { createCard, deleteCard, clearBoard } = cardsSlice.actions;
export default cardsSlice.reducer;
