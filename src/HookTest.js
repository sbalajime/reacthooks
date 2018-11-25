import React, {useState} from 'react';

const  DisplayName = () => {
    const [name, setName] = useState('valueTEST');

    const handleNameChange = e => setName(e.target.value);

    return(
        <input value={name} onChange={handleNameChange} />
    )
}

export default DisplayName;