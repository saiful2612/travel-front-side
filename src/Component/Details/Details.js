import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PlaceOrder from '../../PlaceOrder/PlaceOrder';

const Details = () => {

    const{detailsId}=useParams();

    console.log(detailsId);

    const[product, setProducts]=useState([]);


    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    
    const desireService = product.find( item =>  ( item.id === +detailsId));
   
    return (
        <div>
            <PlaceOrder desireService={desireService}></PlaceOrder>

        </div>
    );
};

export default Details;