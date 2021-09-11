import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dry from './dry-clean.jpg';
import gowns from './wedding gowns.jpg';
import curtain from './curtain.jpg';
import ServiceInfo from './ServiceInfo/ServiceInfo';
import { useState } from 'react';
import { useEffect } from 'react';
import './ServiceInfo/Services.css'


const Services = (e) => {
    const [service,setService] = useState([]);

    console.log(service);
    useEffect(() => {
        fetch('https://peaceful-meadow-02567.herokuapp.com/showService')
        .then(res => res.json())
        .then(data =>{
            
            console.log(data);
            setService(data)})
    },[])
   
      
    

  

    return (
        <div className="text-center">   
            <div className='text-center ml-5'> 
                <h4 style={{opacity:0.5}}>  We Clean Everything! </h4> 
                <h1>Always the <b className='btn-success'>Best Service</b> </h1>
            </div>
        <div className="row">

            {
                service.map(data => <ServiceInfo service={data}  />)
            }



      </div>
    
     

        </div>
    
        
    );
};

export default Services;