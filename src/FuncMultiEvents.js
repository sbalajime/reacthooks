import React, {useEffect, useState} from 'react';

const FuncEvents = () => {
    const status = useOnlineStatus();
    const width = useWidth();

    return(
        <div>
            <h1>Network status: {status}</h1>
            <h1>Width: {width}</h1>
        </div>
    )
}

const useOnlineStatus = () => {
    const [status, setStatus] = useState('online');
    const handleStatusChange = val => {
        console.log('val', val)
        setStatus(val)
    }
    useEffect(() => {
        console.log('inside use effect');
        window.addEventListener('online',() => handleStatusChange('online'));
        window.addEventListener('offline',() => handleStatusChange('offline'));
        return () => {
            console.log('inside use effect return');
            window.removeEventListener('online',() => handleStatusChange('online'));
            window.removeEventListener('offline',() => handleStatusChange('offline'));
        }
    })
     return status
}

const useWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize',handleResize);
        }
    })

    return width
}

export default FuncEvents;