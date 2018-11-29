import React, {useState} from 'react';

const  DisplayName = () => {
    const [fname, setFName] = useState('John');
    const [lname, setLName] = useState('Doe')

    const handleFNameChange = e => setFName(e.target.value);
    const handleLNameChange = e => setLName(e.target.value);

    return(
        <div>
            <input value={fname} onChange={handleFNameChange} />
            <input value={lname} onChange={handleLNameChange} />
        </div>
    )
}

export default DisplayName;