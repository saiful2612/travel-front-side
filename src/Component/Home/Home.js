import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Home = () => {

    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="container">
            <div className="row p-3 ">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Home;