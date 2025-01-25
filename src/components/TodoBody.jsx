import FilterBlock from "./FilterBlock.jsx";
import './todoBody.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function TodoBody ({ todos, handleDoneTask, handleRemove, setFilter, clearCompletedTodos, leftTodos, filter }) {
    return (
        <div className={"todo-body"}>
            {
                todos.map(item => (
                    <div key={item.id} className="todo-item">
                        <button
                            id={item.done ? 'checked' : null}
                            onClick={() => handleDoneTask(item.id)}
                            className={'check'}
                        >
                            {
                                item.done ? <FontAwesomeIcon icon={faCheck} /> : ''
                            }
                        </button>
                        <p className={ item.done ? "done" : "" }>{ item.taskValue }</p>
                        <button onClick={() => handleRemove(item.id)} className={"delete"}>X</button>
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