import App from "../../App";
const MusicTable = (props) => {
  return ( 
        <div>
            <h3>Music Library</h3>
            <table className="table">
            <thead>
              <tr>
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
                let key = entry.id
                return(
                  <tr key={index}>
                    <td>{entry.title}</td>
                    <td>{entry.artist}</td>
                    <td>{entry.album}</td>
                    <td>{entry.release_date}</td>
                    <td>{entry.genre}</td>
                    <td>{entry.likes}</td>
                    <td><button onClick={() => props.deleteSong(entry.id)}> Delete Song</button></td>
                    <td><button onClick={() => props.likeSong(entry.id)}>Like</button></td>
                  </tr>
                )
              })}
            </tbody>        
                  </table>
        </div>
     );
}
 
export default MusicTable;