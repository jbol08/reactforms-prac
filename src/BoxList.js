import Box from './box';
import React, {useState } from 'react';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const add = (boxObject) => {
        setBoxes(boxes => [...boxes, boxObject]);        
    }
    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    const boxValues = boxes.map(box => (
        <Box 
            key={box.id}
            id={box.id}
            backgroundColor={box.backgroundColor}
            height={box.height}
            width={box.width}
            removeBox={removeBox}
    />));
    
    
    return (
        <div>
            <NewBoxForm makeBox={add} />
            {boxValues}            
        </div>
    )
}

export default BoxList;

