import { useEffect, useState } from 'react';

import SearchIcon from './search.svg' //importando a imagem de procura 
import MovieCard from './MovieCard' //importando moviecard
import './App.css';

// aacbc003 omdb apikey

const API_URL = 'https://www.omdbapi.com?apikey=aacbc003'

// const movie1 = {
//     "Title": "Superman, Spiderman or Batman",
//     "Year": "2011",
//     "imdbID": "tt2084949",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
// }

const App = () => {
    const [movies, setMovies] = useState("");
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMovies = async (title) => {                     //integracao de api
        const response = await fetch(`${API_URL}&s=${title}`);  //chama a api
        const data = await response.json();                     //recebe a resposta assincrona
        
        setMovies(data.Search);
    }

    useEffect(() => {   //carrega os filmes quando abre a pagina
        searchMovies('batman'); //valor inicial de pesquisa
    }, []); //2o valor do useEffect aciona apenas 1 vez ao carregar

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} //define o input como SearchTerm
                />

                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)} //no click da imagem manda o searchTerm para searchMoves -> API
                />
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => ( //mapeamento de cada movie resultado
                            <MovieCard movie={movie} /> //cada movie resultado eh passado para MovieCard como prop de movie
                        ))}
                    </div>
                ) : ( //caso nao encontre nenhum filme
                    <div className="empty">  \
                        <h2>No movies found</h2>  
                    </div>
                )
            }

        </div>

    );
}

export default App;