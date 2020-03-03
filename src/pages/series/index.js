import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import './style_serie.css';
import api from '../../services/api';

 function Series (){
     const [series, setSeries] = useState([]);
     const [pages, setPages] = useState(1);

     useEffect(()=>{
         async function loadSeries(){
            const response = await api.get(`/series?page=${pages}`);
            setSeries(response.data.results);
         }

         loadSeries();
        
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
                { series.map( serie =>(
                    <Link className="link" to={`/select/series/${serie.id}`}>
                    <div className="series" Key={serie.id}>
                    <img src={serie.poster_path} alt="Img"/>
                        <strong>{serie.name}</strong>
                        <span>{serie.overview}</span>
                    </div>
                    </Link>
                ))
                }

            </div>
        </div>
    </>
);

}

export default Series;