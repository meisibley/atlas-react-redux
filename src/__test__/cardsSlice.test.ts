import { test, expect } from "vitest";
import reducer, { createCard, deleteCard, clearBoard } from "../slices/cardsSlice";

// test createCard
test('Should create a card', () => {
    const initialState = { cardItems: [] };
    const state = reducer(initialState, createCard({ id: '1', title: 'Card 1', description: 'D one', listId: 'List 1'}));
    expect(state.cardItems.length).toBe(1);
    expect(state.cardItems[0].title).toBe('Card 1');
    expect(state.cardItems[0].description).toBe('D one');
});

// test deleteCard
test('Should delete a card', () => {
    const initialState = { cardItems: [
        { id: '1', title: 'Card 1', description: 'D one', listId: 'List 1'},
        { id: '2', title: 'Card 2', description: 'D two', listId: 'List 1'},
    ] };
    const state = reducer(initialState, deleteCard({ id: '1' }));
    expect(state.cardItems.length).toBe(1);
    expect(state.cardItems[0].title).toBe('Card 2');
});

// test clearBoard
test('Should clear board', () => {
    const initialState = { cardItems: [
        { id: '1', title: 'Card 1', description: 'D one', listId: 'List 1'},
        { id: '2', title: 'Card 2', description: 'D two', listId: 'List 1'},
    ] };
    const state = reducer(initialState, clearBoard());
    expect(state.cardItems.length).toBe(0);
});
