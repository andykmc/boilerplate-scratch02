import React from 'react';
import '@testing-library/jest-dom';
import {
    render,
    fireEvent,
    waitFor,
    screen,
    act,
} from '@testing-library/react';

import MyComponent from './MyComponent';
// import { fetchJustEatByPostCode } from '../common/apiUtils';

// jest.mock('../common/apiUtils', () => ({
//   fetchJustEatByPostCode: () => Promise.resolve('hihi'),
// }));

function setupFetchStub(data) {
    return function fetchStub(_url) {
        return new Promise((resolve) => {
            resolve({
                json: () => Promise.resolve(data),
            });
        });
    };
}

describe('test', () => {
    afterEach(() => {
        global.fetch.mockClear();
        delete global.fetch;
    });

    it('testing', async () => {
        global.fetch = jest.fn().mockImplementation(setupFetchStub('hihi'));

        await act(async () => render(<MyComponent />));

        expect(screen.getAllByText('hello')).toHaveLength(1);
        expect(screen.getAllByText('"hihi"')).toHaveLength(1);

        // global.fetch.mockRestore();
    });
});
