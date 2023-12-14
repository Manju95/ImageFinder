import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Renders Footer', () => {
    test('renders Footers text', async () => {
        render(<Footer />);
        const footerText = await screen.findByRole("footer");
        expect(footerText).toBeInTheDocument();
    });
})
