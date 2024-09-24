import React from "react";
import { RootState, useAppSelector } from "./store";
import DeleteListButton from "./DeleteListButton";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import { useDroppable } from "@dnd-kit/core";

interface ListProps {
    list: {
        id: string;
        title: string;
        cardIds: string[];
    };
}

const List: React.FC<ListProps> = ({ list }) => {
    const cards = useAppSelector((state: RootState) => state.cards.cardItems.filter(card => card.listId === list.id));

    const { setNodeRef } = useDroppable({
        id: list.id,
    });

    return (
        <div ref={setNodeRef} className="list-container">
            <div className="flex flex-col items-center">
                <DeleteListButton listId={list.id} />
                <h3 className="justify-center">{list.title}</h3>
            </div>
            {cards.map(card => (
                <Card key={card.id} id={card.id} title={card.title} description={card.description} />
            ))}
            <NewCardForm listId={list.id} />
        </div>
    );
};

export default List;
