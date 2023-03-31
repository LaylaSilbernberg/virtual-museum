import React from 'react'
import Image from "next/image";

const loading = () => {
  return (
    <Image 
    alt='loading animation'
    width={100} 
    height={100} 
    src='.Spinner-1s-200px.svg'/>
  )
}

export default loading