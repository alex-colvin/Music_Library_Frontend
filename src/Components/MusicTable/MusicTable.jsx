
const MusicTable = (props) => {
    return ( 
        <div>
            <h3>Music Library</h3>
            <table className="table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release</th>
                <th>Genre</th>
                <th>Likes</th>
              </tr>
            </thead>
            <tbody>
              {props.songs.map((entry, index) => {
                return(
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{entry.title}</td>
                    <td>{entry.artist}</td>
                    <td>{entry.album}</td>
                    <td>{entry.release_date}</td>
                    <td>{entry.genre}</td>
                    <td>{entry.likes}</td>
                  </tr>
                )
              })}
            </tbody>        
                  </table>
        </div>
     );
}
 
export default MusicTable;