import { render, screen } from '@/test-utils';
import { ExampleComponent } from './ExampleComponent';

describe('ExampleComponent component', () => {
  it('has correct text', () => {
    render(<ExampleComponent />);

    expect(screen.getByText('Example Component')).toBeInTheDocument();
  });
});
