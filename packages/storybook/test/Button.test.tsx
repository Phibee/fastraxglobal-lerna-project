import React from "react"
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../stories/Button.stories'; 

const { Basic } = composeStories(stories);

test('renders primary button with default args', () => {
    const {container} = render(<Basic />);
    const buttonElement = screen.getByText(/Button/i);
    
    expect(buttonElement).not.toBeNull();
    expect(container.getElementsByClassName('btn-primary').length).toBe(1);
});

test('renders primary button with overriden props', () => {
    render(<Basic>Primary</Basic>); // you can override props and they will get merged with values from the Story's args
    const buttonElement = screen.getByText(/Primary/i);
    
    expect(buttonElement).not.toBeNull();
});