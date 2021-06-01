import React from 'react';

const Home = () => {
    function logData() {
        console.log('clicked');
    }
    return (
        <div>
            <h1>Home Component Works...</h1>
            <button onClick={logData}>Press Me</button>
        </div>
    )
}

export default Home;