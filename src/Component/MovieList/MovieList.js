import Movie from "../Movie/Movie"
export default function MovieList(props){
    return (
        <>
        
        {
            props.movies.map(x=>{
                return <Movie  movie={x}/>
            })
        }
        
        </>
    )
}