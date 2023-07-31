import { useState } from "react";
import Conversation from "./Conversation";
import List from "./List";

function Exercise2() {
    const [conv, setConv] = useState (
        {
            displayConversation: null,
            conversations: [
                {
                    with: "Laura", convo: [
                        { text: "Hi", sender: "self" },
                        { text: "You there?", sender: "self" },
                        { text: "Yeah, hi, what's up?", sender: "other" }
                    ]
                },
                {
                    with: "Dad", convo: [
                        { text: "Have you finished your school work yet?", sender: "other" },
                        { text: "Yes.", sender: "self" },
                        { text: "What do you mean, yes?", sender: "other" },
                        { text: "??", sender: "self" }
                    ]
                },
                {
                    with: "Shoobert", convo: [
                        { text: "Shoobert!!!", sender: "self" },
                        { text: "Dude!!!!!!!!", sender: "other" },
                        { text: "Shooooooooo BERT!", sender: "self" },
                        { text: "You're my best friend", sender: "other" },
                        { text: "No, *you're* my best friend", sender: "self" },
                    ]
                }
            ]
        }
    )

    const showConversation = function(withWhom) {
        const newConv = {...conv};
        newConv.displayConversation = withWhom;
        setConv(newConv);
    }

    const findConversationByName = function(contactName) {
        return conv.conversations.find(item => item.with === contactName);
    }

    return ( <div>
        {conv.displayConversation === null ? 
        <List conversations={conv.conversations} showConversation={showConversation}/> :
        <Conversation conversation={findConversationByName(conv.displayConversation)} showConversation={showConversation}/>}
    </div> );
}

export default Exercise2;