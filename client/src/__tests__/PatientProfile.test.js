import React from 'react';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
import PatientProfile from '../Components/PatientProfile.js';

afterEach(cleanup);


it('CheckboxWithLabel changes the text after click', async () => {
    const { getByText } = render(<PatientProfile/>,);

    const dolphin = await waitForElement(() => getByText(/dolphin/i),)

    expect(dolphin).toBeTruthy();
});