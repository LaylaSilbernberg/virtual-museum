'use client'

import React, { useEffect, useState } from 'react'
import PersonalGalleryView from '../../(Components)/PersonalGalleryView';
import { Image } from '../../(Interfaces)/interfaces';

const PersonalGallery = ({params} : {params: {id: string}}) => {
//http://virtualmuseumappreal.azurewebsites.net/

const [page, setPage] = useState<Image[]>();
const getPage = async() => {
    //const url = `https://virtualmuseumappreal.azurewebsites.net/api/getGallery/${params.id}`;
    const url = `http://localhost:8080/api/getGallery/${params.id}`;

    const data = await fetch(url);
    const result = await data.json();
    console.log(result)

    setPage(result.images);
}

useEffect(() => { 
   getPage()
}, []);

    
  return (
 <PersonalGalleryView pageData={page} />)
  
}

export default PersonalGallery