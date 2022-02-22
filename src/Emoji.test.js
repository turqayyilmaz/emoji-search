import React from 'react'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

let input;
let emojis;
describe('Emoji tests', () => {

    beforeEach(() => {
    render(<App />);
    input = screen.getByPlaceholderText("Please Enter The Emoji")
    emojis = screen.getAllByText('Click to copy emoji')
    })

    test('The emoji data length is 20',() => {
        expect(emojis.length).toEqual(20);
    })
    test('The emojis which was entered in the search bar must been correctly rendered' ,() => {
        const emojiName = 'Joy'
        const joyElement =screen.getByText(emojiName)
        userEvent.type(input,emojiName);
        expect(joyElement.toBeInDocument)

    })
    test('When the emoji is clicked,it has been copied to the clipboard',() => {
        userEvent.click(emojis[0].parentElement);
    })
})