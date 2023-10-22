import React from 'react'

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="filters">
    <button
      onClick={() => {
        setFilter("All");
      }}
      className={filter === "All" ? "active-filter" : null}
    >
      All
    </button>
    <button
      onClick={() => {
        setFilter("Active");
      }}
      className={filter === "Active" ? "active-filter" : null}
    >
      Active
    </button>
    <button
      onClick={() => {
        setFilter("Done");
      }}
      className={filter === "Done" ? "active-filter" : null}
    >
      Done
    </button>
  </div>
  )
}

export default FilterButtons