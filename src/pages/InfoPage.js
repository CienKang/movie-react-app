
const Info = (props) => {
    return ( 
        <>
        <h1>{props.result.Title}</h1>
        <img src={props.result.Poster} alt="poster" />
        </>
     );
}
 
export default Info;