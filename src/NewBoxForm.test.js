import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";


//smoke test
it('renders the div without crashing', () => {
    render(<NewBoxForm />)
});

//snapshot test
it('takes a snapshot of the initial setup', () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot()
});
