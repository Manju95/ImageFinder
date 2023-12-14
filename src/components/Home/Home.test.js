import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

describe('Renders Home', () => {

    test('renders Home', () => {
        render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
        );
        const smallHeading = screen.getByText(/You can discover your favorite image/i);
        expect(smallHeading).toBeInTheDocument();
    });

    test('renders Home components Text', () => {
        render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>);
        const hoorayText = screen.getByText(/HOORAY!/i);
        expect(hoorayText).toBeInTheDocument();
    });

    test('renders Home components Welcome Text', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>);
        const welcomeText = screen.getByTitle(/welcome-text/i);
        expect(welcomeText).toBeInTheDocument();
    });

    test('renders Home components Additional Welcome Text', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>);
        const additionalWelcomeText = screen.getByTitle(/additional-text/i);
        expect(additionalWelcomeText).toBeInTheDocument();
    });
})