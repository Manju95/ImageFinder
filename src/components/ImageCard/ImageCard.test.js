import { render, screen } from '@testing-library/react';
import ImageCard from './ImageCard';

describe('Renders ImageCard', () => { 

    test('renders Image tag', () => {
        render(<ImageCard imageUrl='#' description='test' altDescription='test' />);
        const topicImage = screen.getByRole("topic-image");
        expect(topicImage).toBeInTheDocument();
    });
})