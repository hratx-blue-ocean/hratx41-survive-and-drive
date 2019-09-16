import React from 'react'
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import App from '../Components/App';

afterEach(cleanup);


it('Should have a login option somewhere on the landing (main) page.', async () => {
    const { getByText } = render(<App/>,);

    const dolphin = await waitForElement(() => getByText(/Sign up/i),)

    expect(dolphin).toBeTruthy();
});

it('Should have a signup option somewhere on the landing (main) page.', async () => {
    const { getByText } = render(<App/>,);

    const dolphin = await waitForElement(() => getByText(/Login/i),)

    expect(dolphin).toBeTruthy();
});