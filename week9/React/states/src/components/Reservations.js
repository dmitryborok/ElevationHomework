import ReservationsItem from "./ReservationsItem";

function Reservations(props) {
    return ( 
    <div>
        <p key="0"><b>Current reservations:</b></p>
        {props.reservations.map((r, i) => <p key={i}><ReservationsItem name={r.name} day={r.day} time={r.time}/></p>)}
    </div>

     );
}

export default Reservations;