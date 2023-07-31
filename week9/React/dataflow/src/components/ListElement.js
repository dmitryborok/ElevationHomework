function ListElement(props) {
    return ( 
        <div onClick={() => props.showConversation(props.with)}>{props.with}</div>
     );
}

export default ListElement;
