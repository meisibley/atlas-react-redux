import React from "react";
import List from "./List";

const Board: React.FC = () => {
    const numberOfLists = 3;
    return (
        <div className="flex m-2">
            {Array.from({ length: numberOfLists }).map((_, index) => (
                <div key={index} className="w-98 p-4">
                    <List />
                </div>
            ))}
        </div>
    );
};

export default Board;