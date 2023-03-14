import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./MovieList";
function Home() {
    const [movieArr, setmovieArr] = useState([]);
    const sendRequest = async () => {
        const Url = 'https://movies-library-lilac.vercel.app/trending';
        const response = await fetch(Url);
        const data = await response.json();
        console.log(data);
        setmovieArr(data)
    }
    useEffect(() => {
        sendRequest();
    }, [])
    return (
        <>
            <MovieList movie={movieArr} />

        </>
    );
}

export default Home;