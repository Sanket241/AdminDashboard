import React from 'react'
import { useAuth } from '../store/auth'

export  const Service = () => {
  const {service} = useAuth();
  return (

<section className='section-services'>
<div className="container">
  <h1 className='main-heading'>service</h1>
</div>

<div className="container grid grid-three-cols">
  {
  service.map((curElem,index)=>{
    const {price,description,provider,service}=curElem;
    return(

      <div className="card" key={index}>
    <div className="card-img">
      <img src="/vite.svg" alt="" width="200" height="100"/>
    </div>
    
    <div className="card-details">
      <div className="grid grid-two-cols">
        <p>{provider}</p>
        <p>{price}</p>
      </div>
      <h2>{service}</h2>
      <p>{description}</p>
    </div>
  </div>
  )
  })
  
}
  </div>

</section>

    )
}
