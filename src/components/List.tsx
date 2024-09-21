import React from "react";
import { RootState, useAppSelector } from "./store";
import DeleteListButton from "./DeleteListButton";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

interface ListProps {
    list: {
        id: string;
        title: string;
        cardIds: string[];
    };
}

const List: React.FC<ListProps> = ({ list }) => {
    return (
        <>
            <div className="flex justify-between">
                <h3>{list.title}</h3>
                {/* <DeleteListButton onClick={() => dispatch(deleteList({ id: list.id }))} /> */}
                <DeleteListButton listId={list.id} />
            </div>
            {list.cardIds.map((cardId) => (
                <Card key={cardId} id={cardId} />
            ))}
            <NewCardForm listId={list.id} />
        </>
    );
};

export default List;
