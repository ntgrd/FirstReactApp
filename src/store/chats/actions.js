export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const addChat = (chatName) => ({
    type: ADD_CHAT,
    payload: chatName,
});

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: id,
});

