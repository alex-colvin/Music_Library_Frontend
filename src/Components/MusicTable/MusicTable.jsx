import Song from "../Song/Song";

const MusicTable = (props) => {
    return ( 
        <div>
            <div>Music Table</div>
            <div>
                {props.songs.map((entry, index) => {
                    return(
                        <div key={index}>
                            <Song  title={entry.title} artist={entry.artist} album={entry.album} releaseDate={entry.releaseDate} genre={entry.genre} likes={entry.likes} />
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default MusicTable;