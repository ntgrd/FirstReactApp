import ChatList from '../ChatList';

const NoChats = ({chats}) => {

    return (
        <>
            <h4>Please select a chat</h4>
            <ChatList chats={chats}/>
        </>
    );
};
export default NoChats;