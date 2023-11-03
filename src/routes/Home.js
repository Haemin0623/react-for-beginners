import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);
    const url = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year';

    const api = async () => {
        const api = await (await fetch(url)).json();
        setMovieList(api.data.movies);
        console.log(api);
        setLoading(false);
    };

    useEffect(() => {
        api();
    }, []);

    return (
        <div>
            <h1>Movie~!</h1>
            {loading ? (
                <h3>Loading!</h3>
            ) : (
                movieList.map((movie) => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        image={movie.medium_cover_image}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                ))
            )}
        </div>
    );
}

export default Home;
