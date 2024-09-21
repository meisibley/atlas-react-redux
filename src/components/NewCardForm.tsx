import React, { useState } from "react";
import { useAppDispatch } from "./store";
import { addCardToList } from "../slices/listsSlice";

interface NewCardFormProps {
  listId: string;
}

const NewCardForm: React.FC<NewCardFormProps> = ({ listId }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cardId = Date.now().toString();
        dispatch(addCardToList({ listId, cardId, title, description }));
        setTitle("");
        setDescription("");
    };

    return (
        <div className="group/new-card m-3 flex h-44 w-full justify-center" style={{ width: '400px' }}>
            <form
                onSubmit={handleSubmit}
                className="hidden min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex"
            >
                <input
                    className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Title"
                    name="title"
                />
                <textarea
                    className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    name="description"
                ></textarea>
                <div className="buttons w-full">
                    <button type="submit" className="w-full p-4">Save</button>
                </div>
            </form>
        </div>
    );
};

export default NewCardForm;
