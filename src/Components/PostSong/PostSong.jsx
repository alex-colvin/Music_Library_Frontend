import React, { useState } from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import './PostSong.css'

const PostSong = (props) => {

    const [title, setTitle] = useState();
    const [artist, setArtist] = useState();
    const [album, setAlbum] = useState();
    const [releaseDate, setReleaseDate] = useState(new Date());
    const [genre, setGenre] = useState();

    const handleDateChange = (date) => {
        console.log(date);
        setReleaseDate(date);
      };
    
    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
            likes: 0
        }
    props.createSong(newSong)
    }

    return (
        <div className='ps-center'>
            <form className='mui-form' onSubmit={handleSubmit}>
                    <input type='text' className="mui-textfield m-3 p-2" placeholder="Enter Song Title Here" value={title} onChange={(event) => setTitle(event.target.value)}/>
                    <input type='text' className="mui-textfield m-3 p-2" placeholder="Enter Artist Here" value={artist} onChange={(event) => setArtist(event.target.value)}/>
                    <input type='text' className="mui-textfield m-3 p-2" placeholder="Enter Album Name Here" value={album} onChange={(event) => setAlbum(event.target.value)}/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker className='mui-textfield m-3 bg-light' label="Select Release Date" value={releaseDate} onChange={handleDateChange} />
                    </MuiPickersUtilsProvider>
                    <input type='text' className="mui-textfield m-3 p-2" placeholder="Enter Genre Here" value={genre} onChange={(event) => setGenre(event.target.value)}/>
                <button className='m-3 mbtn btn-primary' type='submit'>Add Song</button>
            </form>
        </div>


     );
}
 
export default PostSong;