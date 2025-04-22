import { useState, useEffect } from "react";
import "./Lottery.css";
import { genRendomNumber, sum } from "./helper";

export default function Lottery() {
    let [ticket, setTicket] = useState(genRendomNumber(3));
    let [winningTickets, setWinningTickets] = useState([]);
    let isWinning = sum(ticket) === 15;

    useEffect(() => {
        if (isWinning) {
            setWinningTickets([...winningTickets, ticket]);
        }
    }, [isWinning]);
    

    let buyTicket = () => {
        setTicket(genRendomNumber(3));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br></br>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, You Won!"}</h3>
            {winningTickets.length > 0 && (
                <div className="winning-tickets">
                    <h4>Winning Tickets:</h4>
                    <ul>
                        {winningTickets.map((t, index) => (
                            <li key={index}>{t.join(', ')}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
