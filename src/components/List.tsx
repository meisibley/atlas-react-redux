import React from "react";
import DeleteListButton from "./DeleteListButton";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

const List: React.FC = () => {
    return (
        <>
            <div className="flex justify-center">
                <DeleteListButton />
            </div>
            <h3 className="text-center">To Do</h3>
            <Card />
            <Card />
            <NewCardForm />
        </>
    );
};

export default List;
