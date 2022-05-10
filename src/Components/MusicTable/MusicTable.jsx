import App from "../../App";
import './MusicTable.css'
const MusicTable = (props) => {
  return ( 
        <div className="w-75 btn-center">
            <table className="text-center table table-dark table-striped table-bordered">
            <thead>
              <tr>
                <th className='col-2'>Title</th>
                <th className='col-2'>Artist</th>
                <th className='col-2'>Album</th>
                <th className='col-2'>Release</th>
                <th className='col-2'>Genre</th>
                <th className='col-1'>Likes</th>
                <th className='col-1' />
                <th className='col-1' />
                <th className='col-1' />
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
                    <td><button className="btn btn-secondary btn-sm btn-center" onClick={() => props.likeSong(entry.id)}>Like</button></td>
                    <td><button className="btn btn-secondary btn-sm btn-center" onClick={() => props.editSong(entry.id)}>Edit</button></td>
                    <td><button className="btn btn-secondary btn-sm btn-center" onClick={() => props.deleteSong(entry.id)}>Delete</button></td>
                  </tr>
                )
              })}
            </tbody>        
          </table>
        </div>
     );
}
 
export default MusicTable;