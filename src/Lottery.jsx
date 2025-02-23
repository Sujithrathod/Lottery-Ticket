import {useState} from "react"
import {genRandom} from "./helper"
import "./Lottery.css"
import {sum} from "./helper"
import Ticket from "./Ticket"

function Lottery({n,winningSum}){
    let [ticket,setticket] = useState(genRandom(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setticket(genRandom(n));
    }

    return (
        <div className="Lottery">
            <h1>Lottery Ticket</h1>
            <Ticket ticket={ticket} />
            <br/>
            <button onClick={buyTicket}>buy ticket</button>
            <h3>{isWinning && "congratulation, you won!"}</h3>
        </div>
    )
}

export default Lottery

