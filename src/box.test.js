import { render } from "@testing-library/react";
import Box from './box';

//smoke test
it('renders the div without crashing', () => {
    render (<Box />)
})

//snapshot test
it('takes a snapshot of the initial setup', () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot()
})
