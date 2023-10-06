import Card from "./card";
import "../styles/cardholder.css"
export default function CardHolder() 
{
    const cards = Array.from({length : 18}).map((_, index) => (
        <Card key={index} id={index+1}/>
    ))
    console.log(cards)

    return (
        <div className="cardHolder">
         {cards}
        </div>  
    )
}