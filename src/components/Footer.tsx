import { useState, FormEvent } from "react";
import { useAppDispatch } from "./store";
import { addList, clearBoard } from "../slices/listsSlice";

export default function Footer() {
    const [title, setTitle] = useState("");
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            dispatch(addList({ title }));
            setTitle("");
        }
    };

    const handleClearBoard = () => {
        dispatch(clearBoard());
    };

    return (
        <footer className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8">
            {/* <form onSubmit={() => alert('Create list')}> */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="List title"
                    name="title"
                    value={title}
                    className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    type="submit"
                    className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
                >
                Save
                </button>
                <button
                    // onClick={() => alert('Clear board')}
                    onClick={handleClearBoard}
                    type="button"
                    className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
                >
                Clear Board
                </button>
            </form>
        </footer>
    );
};
