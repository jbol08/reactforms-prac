import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

const NewBoxForm = ({makeBox}) => {
    const [formData, setFormData] = useState({
        backgroundColor: '',
        height: '',
        width: ''
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }));
      }
    const getValues = (evt) => {
        evt.preventDefault();
        makeBox({...formData, id: uuid()});
        setFormData({ backgroundColor: '', height: '', width: '' })

    };

    return (
        <div>
            <form onSubmit={getValues}>
                <div>
                    <label htmlFor='backgroundColor'>Background Color:</label>
                    <input onChange={handleChange}
                        name='backgroundColor'
                        type='text'
                        value={formData.backgroundColor}
                        id='backgroundColor' />
                </div>
                <div>
                    <label htmlFor='height'>Height:</label>
                    <input onChange={handleChange}
                        name='height'
                        type='text'
                        value={formData.height}
                        id='height' />
                </div>
                <div>
                    <label htmlFor='width'>Width:</label>
                    <input onChange={handleChange}
                        name='width'
                        type='text'
                        value={formData.width}
                        id='width' />
                </div>
                <button> Add a New Box</button>
            </form>
        </div>
    );

}

export default NewBoxForm;