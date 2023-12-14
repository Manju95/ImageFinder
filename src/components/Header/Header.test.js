import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Renders Header', () => {

        test('renders Headers Logo', () => {
            render(<Header />);
            const linkElement = screen.getByText(/SPOTTER/i);
            expect(linkElement).toBeInTheDocument();
        });

        test('renders Header Home button', () => {
            render(<Header />);
            const linkElement = screen.getByText(/Home/i);
            expect(linkElement).toBeInTheDocument();
        });
    }
);