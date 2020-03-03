import React, {useEffect, useState} from "react";
import './style_movies.css';
import api from '../../services/api';
import { Link } from "react-router-dom";

 function Movies (){
     const [movies, setMovies] = useState([]);
     const [pages, setPages] = useState(1);

     useEffect(()=>{
         async function loadMovies(){
            const response = await api.get(`/filmes?page=${pages}`);
            setMovies(response.data.results);
         }

         loadMovies();
        
     },[pages]);
     function Next(){
         setPages(pages+1)
     }
     function Back(){
         if(pages!==0){
            setPages(pages-1)
         }
    }
     return(
     <>
        <div className="container">
            <div className="pages">
                <button id='back' onClick={()=>{Back()}}>{'<'}</button>
                <div className="number_pages">{pages}</div>
                <button id='next' onClick={()=>{Next()}}>{'>'}</button>
            </div>
        <div className="box">
                { movies.map( movie =>(
                    <Link className="link" to={`/select/filmes/${movie.id}`}>
                        <div className="movies" Key={movie.id}>
                        <img src={movie.poster_path} alt="Img"/>
                            <strong>{movie.title}</strong>
                            <span>{movie.overview}</span>
                        </div>
                    </Link>
                ))
                }

            </div>
        </div>
    </>
);

}

export default Movies;