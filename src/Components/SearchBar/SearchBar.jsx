import React, { useState } from 'react';
import App from '../../App';
import { makeStyles, Grid, Textfield, Button } from '@mui/material';
import './SearchBar.css'

const SearchBar = (props) => {

    const [category, setCategory] = useState();
    const [filterData, setFilterData] = useState();

    function handleSubmit(event) {
        event.preventDefault()
        props.filterSongs(category, filterData)
    }


    return (                  
        <div className='sb-center'>
            <form onSubmit={handleSubmit} className='mui-form'>
                {/* <label>Category:</label> */}
                <input type='text' className="m-3 p-2 mui-texfield" placeholder="Enter Category Name" value={category} onChange={(event) => setCategory(event.target.value)}/>
                {/* <label className='form-label'>Filter:</label> */}
                <input type='text' className="m-3 p-2 mui-textfield" placeholder="Enter Search Criteria"value={filterData} onChange={(event) => setFilterData(event.target.value)}/>
                <button className='m-3 p-2 me-5 mbtn btn-primary' onClick={handleSubmit}>Filter</button>
            </form>
        </div>
     );
}
 
export default SearchBar;