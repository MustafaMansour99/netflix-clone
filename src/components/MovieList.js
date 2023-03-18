import Row from 'react-bootstrap/Row';
import Movie from './Movie';
function MovieList(props) {
    return (
        <>
            <h1>Trending</h1>
            <Row xs={1} md={3} className="g-4">
                {props.movie.map((item) => {
                    return <Movie key={item.id} favmovie={item}/>
                })}
            </Row>
               

        </>

        


    );
}

export default MovieList;