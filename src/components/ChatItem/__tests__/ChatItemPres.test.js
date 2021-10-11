import React from 'react';
import {render, screen} from '@testing-library/react';
import {ChatItemPres} from "../ChatItemPres";
import userEvent from '@testing-library/user-event';

describe('ChatItemPres', () => {
    it('matches snapshot', () => {
        const component = render(
            <ChatItemPres/>
        );

        expect(component).toMatchSnapshot();
    });

    it("render List", () => {
        render(
            <ChatItemPres/>
        );

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByRole('listitem')).toBeInTheDocument();
        expect(screen.getByTestId('avatar')).toBeInTheDocument()
    });

    it("button Delete works", () => {
        const onDelete = jest.fn();

        render(
            <ChatItemPres onDelete={onDelete}/>
        );
        const button = screen.getByRole('button');
        userEvent.click(button);

        expect(onDelete.mock.calls.length).toBe(1);
    });
})
