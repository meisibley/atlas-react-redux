import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface List {
    id: string;
    title: string;
    cardIds: string[];
}

interface ListsState {
    lists: List[];
}

const initialState: ListsState = {
    lists: [],
};

const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addList: (state, action: PayloadAction<{ title: string }>) => {
            const newList: List = {
                id: Date.now().toString(),
                title: action.payload.title,
                cardIds: [],
            };
            state.lists.push(newList);
        },
        deleteList: (state, action: PayloadAction<{ id: string }>) => {
            state.lists = state.lists.filter(list => list.id !== action.payload.id);
        },
        addCardToList: (state, action: PayloadAction<{ listId: string; cardId: string }>) => {
            const list = state.lists.find(list => list.id === action.payload.listId);
            if (list) {
                list.cardIds.push(action.payload.cardId);
            }
        },
        moveCard: (state, action: PayloadAction<{ sourceListId: string; destinationListId: string; cardId: string }>) => {
            const { sourceListId, destinationListId, cardId } = action.payload;

            // Find the source and destination lists
            const sourceList = state.lists.find(list => list.id === sourceListId);
            const destinationList = state.lists.find(list => list.id === destinationListId);

            if (sourceList && destinationList) {
                // Remove the card from the source list
                sourceList.cardIds = sourceList.cardIds.filter(id => id !== cardId);

                // Add the card to the destination list
                destinationList.cardIds.push(cardId);
            }
        },
        clearBoard: (state) => {
            state.lists = [];
        },
    },
});

export const { addList, deleteList, addCardToList, moveCard, clearBoard } = listsSlice.actions;
export default listsSlice.reducer;
