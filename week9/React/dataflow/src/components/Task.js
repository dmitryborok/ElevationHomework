function Task(props) {
    return (<div>
        <p>{props.text}  <button onClick={() => props.clickComplete(props.text)}>Complete</button></p>
    </div> );
}

export default Task;