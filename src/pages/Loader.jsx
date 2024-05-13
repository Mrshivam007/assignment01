import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Loader() {
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick1 = () => {
        setLoading1(true);
        setTimeout(() => {
            setLoading1(false);
        }, 10000); // Show loader for 10 seconds
    };

    const handleClick2 = () => {
        setLoading2(true);

        // Toggle loader every 10 seconds (display for 5 seconds, hide for 5 seconds)
        const interval = setInterval(() => {
            setLoading2(prevLoading => !prevLoading); // Toggle loader
        }, 5000); // Repeat every 10 seconds

        // Stop after 20 seconds
        setTimeout(() => {
            clearInterval(interval);
            setLoading2(false); // Ensure loader is hidden after 20 seconds
        }, 50000); // Stop after 20 seconds
    };

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 5000); // Hide loading text after 5 seconds
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleClick();
        }, 15000); // Trigger loading every 10 seconds

        return () => clearInterval(intervalId); // Clean up interval on unmount
    }, []);


    return (
        <div>
            <h1>Loading Functionality</h1>
            {/* <button onClick={handleClick1}> */}
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClick1}
                sx={{ marginRight: '2%' }}
            >
                Loader 1
                {loading1 && <div className="loader"></div>}
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClick2}
                sx={{ marginRight: '2%' }}
            >                Loader 2
                {loading2 && <div className="loader"></div>}
            </Button>
            {/* Loader 2 with different approach */}
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClick}
                sx={{ marginRight: '2%' }}
            >
                Loader 3
            {isLoading && <div className="loader"></div>}
            </Button>
        </div>
    );
}

export default Loader;
