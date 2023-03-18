import { useEffect, useState } from "react";
import MovieList from "./MovieList";
// import './Home.css';
function Home() {
    const [movieArr, setmovieArr] = useState([]);
    const sendRequest = async () => {
        const Url =`${process.env.REACT_APP_URL}trending`;
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
            <MovieList  movie={movieArr} />

        </>
    );
}

export default Home;