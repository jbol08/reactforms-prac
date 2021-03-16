import { render,fireEvent } from "@testing-library/react";
import BoxList from './BoxList';
import React from 'react';

//add a box before running tests
function addBox(boxList, height = "10", width = "10", backgroundColor = "green") {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundColorInput = boxList.getByLabelText("Background Color");
    fireEvent.change(backgroundColorInput, { target: { value: backgroundColor } });
    fireEvent.change(heightInput, { target: { value: height } });
    fireEvent.change(widthInput, { target: { value: width } });
    
    const button = boxList.getByText("Add a New Box");
    fireEvent.click(button);
};
//smoke test
it('renders the div without crashing', () => {
    render (<BoxList />)
})

//snapshot test
it('takes a snapshot of the initial setup', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot()
})
//adds a box
it('adds a box', () => {
    const boxList = render(<BoxList />);
    addBox(boxList);

    const removeButton = boxList.getByText("Remove Box");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
    background-color: green;
    height: 10em;
    width: 10em;    
  `);

})
    
//remove box button
it("removes a box", function() {
    const boxList = render(<BoxList />);
    addBox(boxList);
  
    const removeButton = boxList.getByText("Remove Box");
  
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
  });

