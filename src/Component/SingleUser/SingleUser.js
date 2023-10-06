import React from 'react';


const SingleUser = (props) => {
    const user = props.user;
    console.log(user);
    return (
        <div style={{border:'1px solid black', margin:'20px'}}>
           <h2>{user.name}</h2>
           <h2>{user.phone}</h2>
           <h2>{user.website}</h2>
           {/* <h2>{user.company.name}</h2>
           <h2>{user.address.zipcode}</h2> */}
        </div>
    );
};

export default SingleUser;