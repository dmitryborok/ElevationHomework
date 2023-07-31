function ConversationItem(props) {
    return (<div>
        <b>{props.sender === "self" ? "Me: " : props.with + ":"}</b>
        {props.text}</div>);
}

export default ConversationItem;