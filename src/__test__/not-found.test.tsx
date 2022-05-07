import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';

import App from '../App';

describe.only('Not Found!', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/asdasdasd']}>
                <App />
            </MemoryRouter>
        );
    });

    it('there should be a link to the Launches List page as way to go back.', async () => {
        const anchor = screen.getByRole('link', { name: /SpaceX Launches/i });
        expect(anchor).toHaveAttribute('href', '/');
    });

    it('there should be a message `Not Found!`.', async () => {
        const header = screen.getByRole('heading', { name: /Not Found!/i });
        expect(header).toBeInTheDocument();
    });
});
