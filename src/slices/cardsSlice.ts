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
        createCard: (state, action: PayloadAction<{ id: String; title: string; description: string; listId: string }>) => {
            const newCard: CardItem = {
                // id: Date.now().toString(),
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                listId: action.payload.listId,
            };
            state.cardItems.push(newCard);
        },
        deleteCard: (state, action: PayloadAction<{ id: string }>) => {
            state.cardItems = state.cardItems.filter(card => card.id !== action.payload.id);
        },
        deleteCardsFromList: (state, action: PayloadAction<{ listId: string }>) => {
            state.cardItems = state.cardItems.filter(card => card.listId !== action.payload.listId);
        },
        moveCard: (state, action: PayloadAction<{ cardId: string; destinationListId: string }>) => {
            const card = state.cardItems.find(card => card.id === action.payload.cardId);
            if (card) {
                card.listId = action.payload.destinationListId;
            }
        },
        clearBoard: (state) => {
            state.cardItems = [];
        },
    },
});

export const { createCard, deleteCard, moveCard, deleteCardsFromList, clearBoard } = cardsSlice.actions;
export default cardsSlice.reducer;
