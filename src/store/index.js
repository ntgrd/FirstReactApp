import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { profileReducer} from "./profile/reducers";
import {chatsReducer} from "./chats/reducer";
import {messagesReducer} from "./messageList/reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";
import {newsReducer} from "./news/reducer";
import {weatherReducer} from "./weather/reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    news: newsReducer,
    weather: weatherReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
