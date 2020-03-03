import React, { useEffect,useState }from 'react';
import './style.css';
import { useParams} from 'react-router-dom'
import api from '../../services/api'



export default function Selected (){

    const [select, setSelect] =  useState([]);
    const [personagem, setPersonagem] = useState([]);
    const params = useParams(URLSearchParams);
    const { type, id } = params ;

    useEffect(()=>{
       async function loadSelect(){
           if (type === 'series') {
            const response = await api.get(`/series/${id}`);
            setSelect(response.data);
            setPersonagem(response.data.credits.cast); 
           }else  if(type=== 'filmes'){
            const response = await api.get(`/filmes/${id}`);
            setSelect(response.data); 
            setPersonagem(response.data.credits.cast); 
           }
           
        }
        loadSelect()
    },[id, type])
    
    return(
<>
    
        <div className="content">
            <img src={select.poster_path} alt="img"/>
            <div className="box_text" key={select.id}>
                <strong>Sinopse</strong>
            <p>{select.overview}</p>
            <div className="personagem">
                {personagem.map((item)=>(
                    <div className="box_personagem" key={item.id}>
                        <img src={item.profile_path} alt="img" />
                        <span className="name_personagem">{item.name}/{item.character}</span>
                    </div>
                ))}
            </div>
            </div>
        </div>

    
        {/* <img src="" alt="img"/>
        <div className="box_text">
        <strong>safsdfdsffdg</strong>
        <p>Lorem ipsum dolor sit amet consectetdiandae tenetur, eaque  laudantium est?</p>
        </div>
     */}
     </>  
    )
}