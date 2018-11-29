import React, {useEffect, useState} from 'react';

const FuncEvents = () => {
    const status = useOnlineStatus();
    return(
        <h1>{status}</h1>
    )
}

const useOnlineStatus = () => {
    const [status, setStatus] = useState('online');
    const handleStatusChange = val => {
        console.log('val', val)
        setStatus(val)
    }
    useEffect(() => {
        window.addEventListener('online',() => handleStatusChange('online'));
        window.addEventListener('offline',() => handleStatusChange('offline'));
        return () => {
            window.removeEventListener('online',() => handleStatusChange('online'));
            window.removeEventListener('offline',() => handleStatusChange('offline'));
        }
    })
     return status
}

export default FuncEvents;