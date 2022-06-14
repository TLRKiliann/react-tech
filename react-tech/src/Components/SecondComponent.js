import React from 'react';
import {useState, useEffect} from 'react';

const SecondComponent = () => {
    const {fetch, setFetch} = useState();

    useEffect(() => {
        console.log("It's useEffect !!!");
    }, [setFetch]);

    return (
        <div>
            SecondComponent
            <div>
                {fetch && (<p>Hello</p>)}
            </div>
        </div>
    );
}

export default SecondComponent;