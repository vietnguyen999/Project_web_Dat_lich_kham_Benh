import React from 'react'
import useFetch from '../../hooks/useFectch'
export default function About() {
    const { loading, error, data} = useFetch('http://localhost:1337/api/doctor-informations')
   console.log(data.data)
  if(loading) return (<p>loading...</p>)
  if(error) return (<p>Eror...</p>)
 return (

        <div>
          {data.data.map((doctor) => 
           <div  className="doctor-id">
                {doctor.id}
                <div className='imgs-doctor'>{doctor.attributes.Name}</div>
                <div className='imgs-doctor'>{doctor.attributes.old}</div>
                <div className='imgs-doctor'>{doctor.attributes.specialized}</div>
                <div className='imgs-doctor'>{doctor.attributes.experience}</div>
                
            </div>
          )}
        </div>
 
    // <div>
    //   {data.data.map((doctor) => (
    //       <div  className="doctor-id">
    //         {doctor.id}
    //         <div className='imgs-doctor'>{doctor.attributes.doctorname}</div>
    //         <div className='old'>{doctor.attributes.doctoremail}</div>
    //         <div className='specialized-li'>{doctor.attributes.doctorphone}</div>
    //         <div className='des'> {doctor.attributes.doctordescribe}</div>
    //       </div>
    //     ))
    //   }
    // </div>
 )
}
