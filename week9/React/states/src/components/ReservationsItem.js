function ReservationsItem(props) {
    return ( 
        <div>{props.name} has booked a table for {props.day} at {props.time}</div>
     );
}

export default ReservationsItem;