import './todoForm.css'

export default function TodoForm ({ addTodos, setValue, value }) {
    return (
        <div className={"todo-input"}>
            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type="text"
                placeholder="Create a new todo..."
            />
            <button
                onClick={addTodos}
            >
                +
            </button>
        </div>
    )
}