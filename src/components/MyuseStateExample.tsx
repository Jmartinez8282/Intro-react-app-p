import React, { useState } from 'react'

const MyuseStateExample = () => {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Donatello");
        console.log(name);
    }

    const incrementAge = () =>{
      setAge(age + 1);
    }

    const toggleEmployedStatus = ()=> {
      setIsEmployed(!isEmployed);
    }
  return (
    <>
    <div><p>Name: {name}</p></div>
    <button type="button" className="btn btn-primary" onClick={updateName}>Set Name </button>
    <div><p>Age: {age}</p></div>
    <button type="button" className="btn btn-primary" onClick={incrementAge}>Increment Age </button>
    <div><p>Is Employed: {isEmployed? "Yes":"No"}</p></div>
    <button type="button" className="btn btn-primary" onClick={toggleEmployedStatus}>Toggle Status </button>
    </>
  )
}

export default MyuseStateExample