import ChatList from '../ChatList';

const NoChats = ({chats}) => {


    console.log('fff', chats);
    return (
    <>
        <ChatList chats={chats}/>
        <span>Please select a chat</span>

    </>
    );
};
export default NoChats;