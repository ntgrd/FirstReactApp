import React, {useMemo} from 'react';
import {Redirect, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import MessageList from '../MessageList';
import ChatList from '../ChatList';
import {selectIfChatExists} from "../../store/chats/selectors";

const Chats = (props) => {
    const {chatId} = useParams();

    const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);

    const chatExists = useSelector(selectChatExists)

    if (!chatExists) {
        return <Redirect to="/nochat" />;
    }


    return (
        <>
            <header>
                <h2>Chats</h2>
            </header>

            <div className="app">
                <div>
                    <ChatList chatId={chatId}/>
                </div>
                {!!chatId && chatExists && (
                    <div>
                        <MessageList chatId={chatId}/>

                    </div>
                )}
            </div>
        </>
    );
}

export default Chats;