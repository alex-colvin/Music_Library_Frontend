const Song = (props) => {
    return ( 
        <div>
            <div>{props.title}</div>
            <div>{props.artist}</div>
            <div>{props.album}</div>
            <div>{props.releaseDate}</div>
            <div>{props.genre}</div>
            <div>{props.likes}</div>
        </div>
     );
}
 
export default Song;