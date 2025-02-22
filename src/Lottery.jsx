import {useState} from "react"
import {genRandom} from "./helper"
import "./Lottery.css"
import {sum} from "./helper"

function Lottery(){
    // let ticket = [ceil(Math.random())*10,ceil(Math.random())*10,ceil(Math.random())*10]
    let [ticket,setticket] = useState(genRandom(3));
    let isWinning = sum(ticket) === 15;

    let buyTicket = () => {
        setticket(genRandom(3));
    }

    
    return (
        <div>
            <h1>Lottery Ticket</h1>
            <div className="ticket" style={{color:"white"}}>
                <span>
                    {ticket[0]}
                </span>
                <span>
                    {ticket[1]}
                </span>
                <span>
                    {ticket[2]}
                </span>
            </div>
            <button onClick={buyTicket}>buy ticket</button>
            <h3>{isWinning && "congratulation, you won!"}</h3>
        </div>
    )
}

export default Lottery

