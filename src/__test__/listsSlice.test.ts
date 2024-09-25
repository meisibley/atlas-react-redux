import { test, expect } from "vitest";
import reducer, { addList, deleteList, addCardToList, clearBoard } from "../slices/listsSlice";

// test addList
test('Should add List One', () => {
    const initialState = { lists: [] };
    const state = reducer(initialState, addList({ title: 'List One' }));
    expect(state.lists.length).toBe(1);
    expect(state.lists[0].title).toBe('List One');
});

// test delete a list
test('should delete List One', () => {
    const initialState = {
        lists:[{id: '1', title: 'List One', cardIds: []}]
    }
    const state = reducer(initialState, deleteList({ id: '1' }));
    expect(state.lists.length).toBe(0);
});

// test add a card to a list
test('Should add a card to a list', () => {
    const initialState = {
        lists:[{id: '2', title: 'List One', cardIds: []}]
    }
    const state = reducer(initialState, addCardToList({ listId: '2', cardId: '123'}));
    expect(state.lists.length).toBe(1);
    expect(state.lists[0].cardIds.length).toBe(1);
    expect(state.lists[0].cardIds[0]).toBe('123');
});

// test clear the board
test('Should delete all the lists on the board', () => {
    const initialState = {
        lists:[
            {id: '3', title: 'List One', cardIds: []},
            {id: '4', title: 'List Two', cardIds: []},
        ]
    }
    const state = reducer(initialState, clearBoard());
    expect(state.lists.length).toBe(0);
});
