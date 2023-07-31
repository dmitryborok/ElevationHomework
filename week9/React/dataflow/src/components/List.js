import ListElement from "./ListElement";

function List(props) {
    return ( <div>
        {props.conversations.map(item => <ListElement with={item.with} showConversation={props.showConversation}/>)}
    </div> );
}

export default List;