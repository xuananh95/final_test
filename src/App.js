import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { getTranslation } from "./utils";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

const Home = () => {
    // const [tasks, setTasks] = useState([
    //     { id: "1", title: "Build some websites", status: "undone" },
    //     { id: "2", title: "Do exercises", status: "undone" },
    //     { id: "3", title: "Go shopping", status: "undone" },
    //     { id: "4", title: "House cleaning", status: "done" },
    // ]);

    const [tasks, setTasks] = useState([]);

    const [displayedTasks, setDisplayedTasks] = useState(tasks);

    const [showUndone, setShowUndone] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const [language, setLanguage] = useState("us");

    useEffect(() => {
        // load data from localstorage:
        const newLoadedTasks = localStorage.getItem("tasks")
            ? JSON.parse(localStorage.getItem("tasks"))
            : [];
        setTasks(newLoadedTasks);

        // handle SearchParams
        let flag = false;
        if (searchParams.get("withDone")) {
            flag = searchParams.get("withDone");
            if (flag === "0") {
                setShowUndone(true);
            }
            let newTasks = [];
            if (flag === "0") {
                newTasks = newLoadedTasks.filter(
                    (task) => task.status === "undone"
                );
            } else {
                newTasks = [...newLoadedTasks];
            }
            setDisplayedTasks(newTasks);
        }
    }, []);

    const handleAddNewTask = (newTitle, dueDate) => {
        const newTasks = [
            ...tasks,
            {
                id: uuid(),
                title: newTitle,
                status: "undone",
                dueDate: dueDate,
                order: tasks.length + 1,
            },
        ];
        setTasks(newTasks);
        setDisplayedTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    const handleUncheck = (id) => {
        const newTasks = tasks.map((task) =>
            task.id === id ? { ...task, status: "undone" } : task
        );
        setTasks(newTasks);
        setDisplayedTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    const handleCheck = (id) => {
        const newTasks = tasks.map((task) =>
            task.id === id ? { ...task, status: "done" } : task
        );
        setTasks(newTasks);
        setDisplayedTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };
    const handleCheckbox = () => {
        const currentFlag = showUndone;
        if (showUndone) {
            setDisplayedTasks(tasks);
        } else {
            const newTasks = tasks.filter((task) => task.status === "undone");
            setDisplayedTasks(newTasks);
        }
        setSearchParams({ withDone: currentFlag ? "1" : "0" });
        setShowUndone(!showUndone);
    };

    const handleChangeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <div className="App">
            <div className="container">
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        checked={showUndone}
                        onChange={handleCheckbox}
                    />
                    <label>{getTranslation(language, "checkbox")}</label>
                </div>
                <TodoListHeader
                    length={tasks.filter((d) => d.status === "undone").length}
                    language={language}
                />
                <TodoList
                    tasks={displayedTasks}
                    handleUncheck={handleUncheck}
                    handleCheck={handleCheck}
                    language={language}
                />
                <Form handleAddNewTask={handleAddNewTask} language={language} />
            </div>
            <Footer
                handleChangeLanguage={handleChangeLanguage}
                language={language}
            />
        </div>
    );
};
