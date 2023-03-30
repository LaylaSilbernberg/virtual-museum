'use client'

import React, { useEffect, useState } from 'react'
import MainGallery from '../../(Components)/MainGallery';
import { Data } from '../../(Interfaces)/interfaces';

const PersonalGallery = ({params} : {params: {id: string}}) => {
//http://virtualmuseumappreal.azurewebsites.net/

const [page, setPage] = useState<Data[]>();
const getPage = async() => {
    const url = `http://virtualmuseumappreal.azurewebsites.net/api/getGallery/${params.id}`;

    const data = await fetch(url);
    const result = await data.json();

    setPage(result.data);
}

useEffect(() => { 
   getPage()
}, []);

    
    
  return <MainGallery pageData={page}/>
  
}

export default PersonalGallery