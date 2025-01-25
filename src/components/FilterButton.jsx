export default function FilterButton ({ children, setFilter, filter, id }) {
    return (
        <button
            id={id}
            className={filter === id ? 'active-filter' : null }
            onClick={() => setFilter(children + '')}
        >
            { children }
        </button>
    )
}