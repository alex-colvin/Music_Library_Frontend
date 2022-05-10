import App from "../../App";
const MusicTable = (props) => {

  function deleteButton(key){
    props.deleteSong(key)
  }

//   function show(event) {
//     var rowId = 
//         event.target.parentNode.parentNode.id;
//   //this gives id of tr whose button was clicked
//     var data = 
// document.getElementById(rowId).querySelectorAll(".row-data"); 
//   /*returns array of all elements with 
//   "row-data" class within the row with given id*/

//     var name = data[0].innerHTML;
//     var age = data[1].innerHTML;

//     alert("Name: " + name + "\nAge: " + age);
// }

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
                    <td><button onClick={() => deleteButton(entry.id)}> Delete Song</button></td>
                    <td><button >Like</button></td>
                  </tr>
                )
              })}
            </tbody>        
                  </table>
        </div>
     );
}
 
export default MusicTable;