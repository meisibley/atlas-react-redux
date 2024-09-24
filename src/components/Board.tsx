import React from "react";
import List from "./List";
import { RootState, useAppSelector, useAppDispatch } from './store';
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { moveCard as moveCardInList } from "../slices/listsSlice";
import { moveCard as moveCardInCard } from "../slices/cardsSlice";
import { useSensors, useSensor, PointerSensor } from "@dnd-kit/core";

const Board: React.FC = () => {
    const lists = useAppSelector((state: RootState) => state.lists.lists);
    const dispatch = useAppDispatch();

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 10,
            },
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over) return;

        const cardId = active.id.toString();
        const destinationListId = over.id.toString();

        const sourceList = lists.find(list => list.cardIds.includes(cardId));

        if (sourceList && sourceList.id !== destinationListId) {
            dispatch(moveCardInList({
                sourceListId: sourceList.id,
                destinationListId,
                cardId,
            }));

            dispatch(moveCardInCard({
                cardId: cardId,
                destinationListId: destinationListId,
            }));
        }
    };

    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <div className="flex h-screen w-screen overflow-x-scroll">
                <div className="flex flex-row rounded">
                    {lists.map((list) => (
                        <div key={list.id} className="w-98 p-4" id={list.id}>
                            <List list={list} />
                        </div>
                    ))}
                </div>
            </div>
        </DndContext>
    );
};

export default Board;
