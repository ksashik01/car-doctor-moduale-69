import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

useEffect(() =>{
    fetch ('service.json')
    .then (res => res.json())
    .then (data => setServices(data))

},[])

    return (
        <div>
            <div className="text-center">
            <h3 className="mb-10">Our Servicess Area</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatibus et voluptatum esse fugit impedit, dolor adipisci numquam velit doloremque?</p>
            </div>
            <p>Service: {services.length}</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
    
        
        {
            services.map (service => <ServiceCard
                key ={service._id}
                service={service}
            
            >


            </ServiceCard>)

        }
    
</div>

        </div>
    );
};

export default Services;