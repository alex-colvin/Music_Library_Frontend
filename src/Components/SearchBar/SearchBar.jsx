const SearchBar = (props) => {

    function handleSubmit(event) {
        event.preventDefault();
        props.getAllSongs() 
    }


    return ( 
        <div>Search Bar
            <form onSubmit={handleSubmit}>
                <button>Get All Songs</button>
            </form>
        </div>

     );
}
 
export default SearchBar;