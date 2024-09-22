import React from "react";
import DeleteCardButton from "./DeleteCardButton";

interface CardProps {
    id: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ id, title, description }) => {
    return (
        <div
            className="card group/card m-3 flex min-h-24 w-full max-w-96 flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue"
            style={{ width: '350px', height: '90px'}}
        >
                <h5
                    className="my-2 flex w-full items-end justify-between text-xl font-black"
                >
                    <span>{title}</span>
                    <DeleteCardButton cardId={id}/>
                </h5>
                <p className="mt-0 text-left">
                    {description}
                </p>
        </div>
    );
};

export default Card;
