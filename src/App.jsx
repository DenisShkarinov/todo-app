import { useState, useEffect } from 'react'

import {
    useRequestTodos,
} from "./hooks/useRequestTodos.js"

// components
import Title from "./components/Title.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoBody from "./components/TodoBody.jsx";

import Info from "./components/Info.jsx";
import {useAddTodo} from "./hooks/useAddTodo.js";
import {useDeleteTodo} from "./hooks/useDeleteTodo.js";
import {useDone} from "./hooks/useDone.js";

function App() {
    const [theme, setTheme] = useState(true);
    const [filter, setFilter] = useState("All");

    const { todos, setTodos } = useRequestTodos()
    const { value, setValue, addTodos } = useAddTodo()
    const { requestDeleteTodo } = useDeleteTodo()
    const { requestDone, activeTodos, completedTodos, leftTodos } = useDone(todos)
    const switchTheme = () => {
        setTheme(!theme);
    }

    useEffect(() => {
        if (theme === false) {
            document.body.classList.add('dark');

        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return (
        <main >
            <div className="todo-container">
                <Title
                    switchTheme={switchTheme}
                    theme={theme}
                />
                <TodoForm
                    addTodos={addTodos}
                    setValue={setValue}
                    value={value}
                />
                <TodoBody
                    todos={
                        filter === 'All'
                            ? todos
                            : filter === 'Completed'
                                ? completedTodos
                                : activeTodos
                    }
                    filter={filter}
                    requestDone={requestDone}
                    requestDeleteTodo={requestDeleteTodo}
                    setFilter={setFilter}
                    // clearCompletedTodos={clearCompletedTodos}
                    leftTodos={leftTodos}
                />

                <Info />
            </div>
        </main>
    )
}

export default App
