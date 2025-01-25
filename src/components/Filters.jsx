import FilterButton from "./FilterButton.jsx";

export default function Filters ({ setFilter, filter }) {
    return (
        <div className="filters">
            <FilterButton id="All" filter={filter} setFilter={setFilter}>All</FilterButton>
            <FilterButton id="Active" filter={filter} setFilter={setFilter}>Active</FilterButton>
            <FilterButton id="Completed" filter={filter} setFilter={setFilter}>Completed</FilterButton>
        </div>
    )
}