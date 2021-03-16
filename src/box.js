import React from 'react';

function Box ({
    id,
    handleRemove,
    backgroundColor = 'green',
    height = 10,
    width = 10
})
{
    const removeBox = () => handleRemove(id);
    return (
        <div>
            <div style={{
                backgroundColor,
                height: `${height}em`,
                width: `${width}em`,
            }}>
            </div>
            <button onClick={removeBox} id='removeBox'>Remove Box </button>
        </div>
    )
};

export default Box;