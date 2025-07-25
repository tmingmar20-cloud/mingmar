import React from 'react'

export const Contact = () => {
    const isloggedIn = false ;
    if(isloggedIn){
  return (
    <h1> welcome back </h1>
 )
}
    else {
        return (
            <div className='AppContact'><h1>Hello! Please log in.</h1></div>
        )
    }
  
}
export default Contact
