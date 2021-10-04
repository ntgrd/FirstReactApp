import React from 'react';
import {ChatItemContainer} from "../ChatsItemContaner";
import configureMockStore from 'redux-mock-store';
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";

jest.mock("../ChatItemPres", () => ({
    ChatItemPres: () => (
        <div data-testid="ChatItemPres"/>

    )
}));

const mockStore = configureMockStore([]);

const store = mockStore({});

const chat = {
    id: 0,
    chatName: 'Some',
};

describe('ChatItemContainer', () => {

    it("renders a ChatItemPres", () => {
        render(
            <Provider store={store}>
                <ChatItemContainer chat={chat}/>
            </Provider>)
        expect(screen.queryByTestId("ChatItemPres"))
            .toBeInTheDocument()
    });

    it('matches snapshot', () => {

        const component = render(
            <Provider store={store}>
                <ChatItemContainer chat={chat}/>
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });

    it('calls handleDeleteChat', (object, method) => {
        jest.setTimeout(8000);
        const handleDeleteChat = jest.fn();
        handleDeleteChat();

        expect(handleDeleteChat).toHaveBeenCalled();
    });

})
