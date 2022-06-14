import React from 'react';
import {useEffect} from 'react';

const SecondComponent = () => {
    useEffect(() => {
        console.log("It's useEffect !!!");
    });

    return (
        <div>
            SecondComponent
        </div>
    );
}

export default SecondComponent;