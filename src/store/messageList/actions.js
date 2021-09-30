import {AUTHORS} from "../../utils/constants";
import {onValue, ref, set} from "firebase/database";
import {db} from "../../services/firebase";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";
export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";

export const addMessage = (chatId, text, author) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        text,
        author,
    },
});

export const deleteMessage = (chatId, id) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId,
        id,
    },
});


const setMessages = (messages) => ({
    type: SET_MESSAGES,
    payload: messages,
});

export const initMessages = () => (dispatch) => {
    const messagesDbRef = ref(db, 'messages');
    onValue(messagesDbRef, (snapshot) => {
        const data = snapshot.val();

        dispatch(setMessages(data || {}));
        console.log('data', data)
    });

}

export const addMessageFb = (text, author, chatId) => (dispatch) => {
    const newId = `message-${Date.now()}`;
    const messagesDbRef = ref(db, `messages/${chatId}/${newId}`);
    set(messagesDbRef, {
        text,
        author,
        id: newId,
    });
};

let timer;
export const addMessageWithReply = (text, author, chatId) => (dispatch) => {
    dispatch(addMessageFb(text, author, chatId));
    if (author === AUTHORS.Natalia) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            dispatch(addMessageFb('I am bot', AUTHORS.bot, chatId));
            // fetch(CHATBOT_URL, {
            //     "method": "GET",
            //     "headers": {
            //         "x-rapidapi-host": "ai-chatbot.p.rapidapi.com",
            //         "x-rapidapi-key": "47b09678f0msh57da7247e17048bp13036ejsn54422db35fbd"
            //     }
            // })
            //     .then(response => {
            //         console.log(response);
            //     })
            //     .catch(err => {
            //         console.error(err);
            //     });
        }, 1500);
    }
};