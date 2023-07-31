import ConversationItem from "./ConversationItem"

function Conversation(props) {
    return ( <div>
        <p><button onClick={() => props.showConversation(null)}>Back</button></p>
        {props.conversation.convo.map(item => <ConversationItem text={item.text} sender={item.sender} with={props.conversation.with}/>)}
    </div> )
}

export default Conversation