import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleUser from '../SingleUser/SingleUser';





const User = () => {
    const [country, setCountry] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data=> setCountry(data.data))
    },[])

    const [user,setUser] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.name.value;
        const storeValue = country.find(country => country.name === value);
        setUser(storeValue);
        
    }
    
    return (
        <div>
         <h2>Serach User</h2>
         <form onSubmit={handleSubmit}>
            User name: <input type="text" name="name" />
            <button type="submit">Submit</button>
         </form>
        
         <SingleUser user={user}></SingleUser>
         
        </div>
    );
};

export default User;