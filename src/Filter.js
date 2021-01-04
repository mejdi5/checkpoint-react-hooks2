import React from 'react'


function Filter({text, setText, searchingStars, resetRate, FilterByNameAndRate}) {
    const reset=() => {
        return (
            resetRate(),
            setText('')
        )
    }
   
const FilterFunction = () => {FilterByNameAndRate(); setText(''); resetRate()}


return (
    <div className="Filter">
        <diV>
            <button className="reset" onClick={reset}>RESET</button>
            <input className="searchInput" type='text' placeholder="search movies" value={text} onChange={e => setText(e.target.value)}/> 
            <button className="Filtering" onClick={FilterFunction}>Filter Movies</button>

        </diV>
        <p className="stars">{searchingStars}</p>
    </div>
    )
}

export default Filter

