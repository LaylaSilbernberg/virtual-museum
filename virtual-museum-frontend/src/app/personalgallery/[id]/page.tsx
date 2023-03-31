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

    const data = await fetch(url, {next: {revalidate: 10}});
    const result = await data.json();

    setPage(result.images);
}

useEffect(() => { 
   getPage()
}, []);

    
  return (
    <><video
      id='background_video'
      className='background__video'
      autoPlay
      loop
      muted>
      <source src='/personalgalleryclip.mp4' />
    </video><PersonalGalleryView paramID={params.id} images={page} /></>)
  
}

export default PersonalGallery