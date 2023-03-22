import React from 'react'
import useFetch from '../../hooks/useFectch'
import "./About.css";
export default function About() {

    const { loading, error, data} = useFetch('http://localhost:1337/api/doctor-informations?populate=*')
   console.log(data.data)
  if(loading) return (<p>loading...</p>)
  if(error) return (<p>Eror...</p>)

 return (

        <div>
          {data.data.map((doctor) => 
           <div  className="doctor-id">
                {/* {doctor.id} */}
              <img src={`http://localhost:1337${doctor.attributes.imgs.data[0].attributes.url}`} className='imgs-doctor'/>   
                <div className='imgs-name'>{doctor.attributes.Name}</div>
                <div className='imgs-old'>{doctor.attributes.old}</div>
                <div className='imgs-spe'>{doctor.attributes.specialized}</div>
                <div className='imgs-exp'>{doctor.attributes.experience}</div>
                
            </div>
          )}
        </div>
 
 )

}