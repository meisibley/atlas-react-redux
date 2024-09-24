import React from "react";
import DeleteCardButton from "./DeleteCardButton";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface CardProps {
    id: string;
    title: string;
    description: string;
    listId: string;
}

const Card: React.FC<CardProps> = ({ id, title, description, listId }) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        width: '350px',
        height: '90px',
        transition: isDragging ? 'none' : 'transform 0.2s ease',
        zIndex: isDragging ? 999 : 'auto',
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="card group/card m-3 flex min-h-24 w-full max-w-96 flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue"
            {...listeners}
            {...attributes}
        >
            <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
                <span>{title}</span>
                <DeleteCardButton cardId={id} listId={listId} />
            </h5>
            <p className="mt-0 text-left">{description}</p>
        </div>
    );
};

export default Card;
