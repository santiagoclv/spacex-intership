import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import handlersWithData from './mocks/handlersWithData';
import handlersWithoutData from './mocks/handlersWithoutData';
import handlersWithError from './mocks/handlersWithError';

import App from '../App';


describe('Launches', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
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

    test('Should be an input text with label "filter by mission name" field in order to do the search.', () => {
        const input = screen.queryByRole('textbox', { name: /filter by mission name/i });
        expect(input).toBeInTheDocument();
    });

    test('There should be a search button with label "search"', () => {
        const searchButton = screen.getByRole('button', { name: /search/i });
        expect(searchButton).toBeInTheDocument();
    });
});
