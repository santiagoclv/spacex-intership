import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorBoundary from '../components/error-boundary';

declare const window: {
    location?: Partial<Location>
};

describe('when the app works without error', () => {
    beforeEach(() => {
        render(
            <ErrorBoundary >
                <h1>SpaceX Launches List</h1>
            </ErrorBoundary>
        );
    });

    it('must render the app component', () => {
        expect(
            screen.getByRole("heading", { name: /SpaceX Launches List/i })
        ).toBeInTheDocument();
    });
});

describe('when the app works throw an error', () => {
    beforeEach(() => {
        const ThrowError = () => {
            throw new Error('Something went wrong.');
        };

        render(
            <ErrorBoundary >
                <ThrowError />
            </ErrorBoundary>
        );
    });

    it('must render the message "There is an unexpected error" and a reload button', () => {
        expect(
            screen.getByRole("heading", { name: /There is an unexpected error/i })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("button", { name: /reload/i })
        ).toBeInTheDocument();
    });
});

describe('when the user clicks the reload button', () => {
    beforeEach(() => {
        const ThrowError = () => {
            throw new Error('Something went wrong.');
        };

        render(
            <ErrorBoundary >
                <ThrowError />
            </ErrorBoundary>
        );
    });

    it('must reload the app', () => {
        delete window.location;
        window.location = {
            reload: jest.fn()
        }
        const reloadBtn = screen.getByRole("button", { name: /reload/i });
        userEvent.click(reloadBtn);
        expect(window.location.reload).toHaveBeenCalled();
    });
});