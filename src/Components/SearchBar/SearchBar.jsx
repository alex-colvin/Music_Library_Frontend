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
        
            <form onSubmit={handleSubmit} className='input-group rounded'>
                {/* <label>Category:</label> */}
                <input type='text' className="m-3 ms-5 form-control rounded" placeholder="Enter Category Name" value={category} onChange={(event) => setCategory(event.target.value)}/>
                {/* <label className='form-label'>Filter:</label> */}
                <input type='text' className="m-3 form-control rounded" placeholder="Enter Search Criteria"value={filterData} onChange={(event) => setFilterData(event.target.value)}/>
                <button className='m-3 me-5 mbtn btn-primary' onClick={handleSubmit}>Filter</button>
            </form>
     );
}
 
export default SearchBar;