import React from 'react'
import "./assets/About.css"


function About(propsRabiul) {
  return (
    <div className="about">
        <h1>My name is{propsRabiul.name} From {propsRabiul.address}</h1>

    </div>
  )
}

export default About