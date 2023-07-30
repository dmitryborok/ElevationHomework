import CalendarItem from "./CalendarItem";

function Calendar(props) {
    return (
        <div>
            <p key="0"><b>You can't make reservation at the following times:</b></p>
            {props.reservations.map((r, i) => <p key={i}><CalendarItem day={r.day} time={r.time}/></p>)}
        </div>
        );
}

export default Calendar;