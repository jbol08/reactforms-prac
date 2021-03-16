import React from 'react';

function Box ({
    id,
    removeBox,
    backgroundColor = 'green',
    height = 10,
    width = 10
})
{
    const remove = () => removeBox(id);
    return (
        <div>
            <div style={{
                backgroundColor,
                height: `${height}em`,
                width: `${width}em`,
            }}>
            </div>
            <button onClick={remove}>Remove Box </button>
        </div>
    )
};

export default Box;