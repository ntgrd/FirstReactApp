import React, {useCallback, useEffect} from 'react';
import Icon from "@material-ui/core/Icon";
import {useDispatch, useSelector} from "react-redux";

import AddForm from '../AddForm';
import {ChatItemContainer} from "../ChatItem/ChatsItemContaner";
import {selectChats} from "../../store/chats/selectors";
import {addChatFb, initChats} from "../../store/chats/actions";
// import {db} from "../../services/firebase";
// import {onValue, ref, set} from "firebase/database";

const ChatList = ({chatId}) => {

    const chats = useSelector(selectChats);
    const dispatch = useDispatch();
    // const [chats, setChats] = useState([]);
    // const [value, setValue] = useState("");

//     useEffect(() => {
//         const chatsDbRef = ref(db, "chats");
//         onValue(chatsDbRef, (snapshot) => {
//             const data = snapshot.val();
//             console.log("-------", data);
//             setChats(Object.values(data || {}));
//         });
//     }, []);
//
// const handleAddChat = (event) => {
//     event.preventDefault();
//
//     const newId = `chat-${Date.now()}`;
//
//     const chatDbRef = ref(db, `chats/${newId}`);
//
//     set(chatDbRef, {
//         id: newId,
//         name: value,
//     });
//     setValue("");
// };
//     const handleAddChat = useCallback((chatName) => dispatch(addChat(chatName)), [dispatch]);

    useEffect(() => {
        dispatch(initChats());
    }, []);

    const handleAddChat = useCallback((value) => dispatch(addChatFb(value)), [dispatch]);

    return (
        <div>
            {chats.map((chat) => (
                <ChatItemContainer chat={chat} key={chat.id} current={chat.id === chatId}/>
            ))}
            <AddForm
                onAdd={handleAddChat}
                inputPlaceholder="New chat name"
                addIcon={<Icon>add</Icon>}
            >
                Add chat
            </AddForm>
        </div>
    );
};

export default ChatList;