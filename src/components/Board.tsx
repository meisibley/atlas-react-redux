// src/components/Board.tsx
import React from "react";
import List from "./List";
import Footer from "./Footer";
import { RootState, useAppSelector } from './store';

const Board: React.FC = () => {
    const lists = useAppSelector((state: RootState) => state.lists.lists);
    //const lists = useAppSelector((state) => state.lists.lists);

    return (
        <div>
        <div className="flex m-2">
            {lists.map((list) => (
                <div key={list.id} className="w-98 p-4">
                    <List list={list} />
                </div>
            ))}
        </div>
        <Footer />
        </div>
    );
};

export default Board;
