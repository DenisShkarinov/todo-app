import FilterBlock from "./FilterBlock.jsx";
import './todoBody.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function TodoBody ({ todos, handleDoneTask, handleRemove, setFilter, clearCompletedTodos, leftTodos, filter }) {
    return (
        <div className={"todo-body"}>
            {
                Object.entries(todos).map(([id,  { taskValue, done }]) => (
                    <div key={id} className="todo-item">
                        <button
                            id={done ? 'checked' : null}
                            onClick={() => handleDoneTask(id)}
                            className={'check'}
                        >
                            {
                                done ? <FontAwesomeIcon icon={faCheck} /> : ''
                            }
                        </button>
                        <p className={ done ? "done" : "" }>{ taskValue }</p>
                        <button onClick={() => handleRemove(id)} className={"delete"}>X</button>
                    </div>
                ))
            }
            <FilterBlock
                setFilter={setFilter}
                clearCompletedTodos={clearCompletedTodos}
                leftTodos={leftTodos}
                filter={filter}
            />
        </div>
    )
}