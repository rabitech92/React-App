import React from 'react'
import { useState } from 'react';

function Practice() {
    const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

    
    
  return (
    <div>
        <p>my  {brand} is {model} made in {year} {color}</p>
      
    </div>
  )
}

export default Practice
