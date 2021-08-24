import React from 'react';
import '@testing-library/jest-dom';
import {
    render,
    // fireEvent,
    // waitFor,
    screen,
    act,
} from '@testing-library/react';

import MyComponent from './MyComponent';
import { clearFetchMock, initFetchMocks } from '../common/testUtils';

describe('test', () => {
    afterEach(() => {
        clearFetchMock();
    });

    it('testing', async () => {
        initFetchMocks(['hihi', 'byebye']);

        expect(global.fetch).toHaveBeenCalledTimes(0);
        await act(async () => render(<MyComponent />));

        screen.debug();

        expect(screen.getAllByText('hello')).toHaveLength(1);
        expect(screen.getAllByText('"hihi"')).toHaveLength(1);
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});
