import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import handlersWithData from './mocks/handlersWithData';

import App from '../App';

describe.only('Launch', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/launch/109']}>
                <App />
            </MemoryRouter>
        );
    });
    const server = setupServer(...handlersWithData);
    // Establish API mocking before all tests.
    beforeAll(() => server.listen());
    // Reset any request handlers that we may add during the tests,
    // so they don't affect other tests.
    afterEach(() => server.resetHandlers());
    // Clean up after the tests are finished.
    afterAll(() => server.close());

    it('1 === 1', () => {
        expect(1).toBe(1);
    });

});
