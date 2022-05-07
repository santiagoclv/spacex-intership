import React from 'react';
import { ReactNodeLike } from 'prop-types';
import Message from '../message';
import { Button, Container } from '@material-ui/core';

interface IProps {
    children: ReactNodeLike
}

interface IState {
    hasError?: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState>  {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // console.error(error, errorInfo);
    }

    render() {
        if (this.state?.hasError) {
            // You can render any custom fallback UI
            return (
                <Container>
                    <Message content={"There is an unexpected error"} />
                    <Button 
                        name="reload"
                        onClick={() => {
                            window.location.reload()
                        }}
                    >
                        Reload
                    </Button>
                </Container>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

