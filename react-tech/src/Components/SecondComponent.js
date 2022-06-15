import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';


const SecondComponent = () => {
    const {users, setUsers} = useState(null);
    const URL = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        console.log("It's useEffect !!!");
        axios.get(URL)
            .then((response) => {
                const users = response.data;
                console.log(response.data)
                console.log(response.data[0])
            });
    }, [users]);

    if (!users) {
        return null;
    }

    return (
        <div className="second--class">
            <h2>
                SecondComponent (API)
            </h2>
            <div>
                {users ? users.map((user, i) => {<p>user.name</p>}) : null}
            </div>
        </div>
    );
}

export default SecondComponent;