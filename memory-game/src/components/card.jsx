import { useEffect, useState } from "react";
import "../styles/card.css"


export default function Card({id , handleChange, test}) 
{   
    const [heros, setHeroes] = useState([]); 
    const [img, setImg] = useState("");
    
     
    useEffect(() => {   
        (async () => {
            const data = await fetch(`https://www.superheroapi.com/api.php/282477491266100/${id}` , {mode: "cors"}).then(res => res.json());
            setHeroes(data);
            setImg(data.image.url); 
        })();

    } , []);    

    
    return(
        <div className="card"  >
            <div className="heroimage">
                <img src={img} onClick={handleChange} alt={heros.name} />
            </div>
            <button  onClick={handleChange} className="Name">{heros.name}</button>
        </div>
    )
}

