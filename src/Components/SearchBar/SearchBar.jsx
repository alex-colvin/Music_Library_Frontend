import React, { useState } from 'react';
import App from '../../App';

const SearchBar = (props) => {

    const [category, setCategory] = useState();
    const [filterData, setFilterData] = useState();

    function handleSubmit(event) {
        event.preventDefault()
        props.filterSongs(category, filterData)
    }


    return (                  
            <form onSubmit={handleSubmit}>
                <h3>Search Bar</h3>
                <label>Category:</label>
                <input type='text' value={category} onChange={(event) => setCategory(event.target.value)}/>
                <label>Filter:</label>
                <input type='text' value={filterData} onChange={(event) => setFilterData(event.target.value)}/>
                <button onClick={handleSubmit}>Filter</button>
            </form>
     );
}
 
export default SearchBar;