import React from "react";
import List from "./List";
import { RootState, useAppSelector } from './store';

const Board: React.FC = () => {
    const lists = useAppSelector((state: RootState) => state.lists.lists);
    //const lists = useAppSelector((state) => state.lists.lists);

    return (
        <div className="flex h-screen w-screen overflow-x-scroll">
            <div className="flex flex-row rounded">
                {lists.map((list) => (
                    <div key={list.id} className="w-98 p-4">
                        <List list={list} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Board;
