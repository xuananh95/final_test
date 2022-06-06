import { useState } from "react";
import { getTranslation } from "./utils";

const Form = ({ handleAddNewTask, language }) => {
    const [newTitle, setNewTitle] = useState("");
    const [dueDate, setDueDate] = useState(new Date());
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTitle || !dueDate) {
            alert("Fill all the fields!");
            return;
        }
        handleAddNewTask(newTitle, dueDate);
        setNewTitle("");
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                placeholder={getTranslation(language, "placeholder")}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <button onClick={handleSubmit}>
                {getTranslation(language, "submit")}
            </button>
        </form>
    );
};

export default Form;
