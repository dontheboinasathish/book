import React, { useState } from 'react'

export default function callbackexample() {
 const [value,setValue]=useState(10)


  return (
    <div>
      <h1>{value}</h1>
      <button onClick={setValue(value+1)}></button>
    </div>
  )
}
