import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { getTranslation } from "./utils";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const TodoList = ({
    tasks,
    handleUncheck,
    handleCheck,
    language,
    handleMoveUp,
    handleMoveDown,
}) => {
    return (
        <div className="todo-list-container">
            {tasks.map((task, index) => (
                <div
                    key={task.id}
                    className={`todo-item-container ${
                        task.status === "done" ? "done" : ""
                    }`}
                >
                    {task.status === "done" ? (
                        <FaRegCheckCircle
                            color="#9a9a9a"
                            className="item-done-button"
                            onClick={() => handleUncheck(task.id)}
                        />
                    ) : (
                        <FaRegCircle
                            className="item-done-button"
                            color="#9a9a9a"
                            onClick={() => handleCheck(task.id)}
                        />
                    )}
                    <div className="task-container">
                        <div className="item-title">{task.title}</div>
                        <div className="item-due">
                            {`${Math.ceil(
                                Math.abs(
                                    Date.parse(task.dueDate) -
                                        Date.parse(new Date())
                                ) /
                                    (1000 * 3600 * 24)
                            )} ${getTranslation(language, "day")}`}
                        </div>
                        <div className="btn-grp">
                            <button
                                style={{ marginRight: 5 }}
                                onClick={() => handleMoveUp(task.id)}
                            >
                                <AiOutlineArrowUp />
                            </button>
                            <button onClick={() => handleMoveDown(task.id)}>
                                <AiOutlineArrowDown />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
