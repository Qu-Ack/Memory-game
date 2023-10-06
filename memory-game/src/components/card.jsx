import { useEffect, useState } from "react";
import "../styles/card.css"


export default function Card({id}) 
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
        <div className="card">
            <div className="heroimage">
                <img src={img} alt={heros.name} />
            </div>
            <p className="Name">{heros.name}</p>
        </div>
    )
}

