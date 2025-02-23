import TicketNum from "./ticketNum"
import "./Ticket.css"
import { v4 as uuidv4 } from 'uuid';


export default function Ticket({ticket}) {
    return (
        <div className="Ticket">
            <h4>Ticket</h4>
            { 
            ticket.map((todo)=>(
                <TicketNum num={todo} key={uuidv4()}/>
            ))
            }
        </div>
    )
}
