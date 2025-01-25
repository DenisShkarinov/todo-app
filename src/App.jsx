import { useState, useEffect } from 'react'
// components
import Title from "./components/Title.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoBody from "./components/TodoBody.jsx";

import { initialState } from "./utils.js";
import FilterBlock from "./components/FilterBlock.jsx";
import Info from "./components/Info.jsx";

function App() {
    const [theme, setTheme] = useState(true);
    const [todos, setTodos] = useState(initialState)
    const [filter, setFilter] = useState("All");
    const [value, setValue] = useState('');

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

    const addTodos = () => {

        if (value.length > 0) {
            let doneTask = todos
            setTodos(
                [
                ...doneTask,
                {
                    id: Date.now(),
                    taskValue: value,
                    done: false,
                }]);

        }
        setValue("")
    }

    const handleDoneTask = (id) => {
        setTodos(todos => todos.map(todo => {
            return todo.id === id ? { ...todo, done: !todo.done } : todo
        }))
    }
    const completedTodos = todos.filter(todo => todo.done)
    const activeTodos = todos.filter(todo => !todo.done)
    const leftTodos = todos.filter(todo => !todo.done).length

    const clearCompletedTodos = () => {
        setTodos(todos.filter(todo => !todo.done))
    }

    const handleRemove = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

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
                    handleDoneTask={handleDoneTask}
                    handleRemove={handleRemove}
                    theme={theme}
                    setFilter={setFilter}
                    clearCompletedTodos={clearCompletedTodos}
                    leftTodos={leftTodos}
                />

                <Info />
            </div>
        </main>
    )
}

export default App
