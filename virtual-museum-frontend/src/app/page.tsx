'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react';
import MainGallery from './(Components)/MainGallery';
import { Data } from './(Interfaces)/interfaces';

export default function Home() {


  const [mainPage, setMainPage] = useState<Data[]>();

  const createGallery = async() => {
    const url = `http://virtualmuseumappreal.azurewebsites.net/api/`

    const data = await fetch(url + '/getGalleries')
    let result;

    data.status === 404 && await fetch(url + '/createEmptyGallery', {
      method: 'POST',
      headers: {

      }
    }).then((element) => result = element.json())

    console.log(result)
  }


  const getRandomPage = async() => {
      const totalPages = 9964;
      const limit = 8;
      const fields = "id,title,place_of_origin,department_title,thumbnailDTO,department_id,gallery_title,gallery_id,artist_display,image_id";
      const url = `https://api.artic.edu/api/v1/artworks?fields=${fields}&limit=${limit}&page=${Math.floor(Math.random() * totalPages)}`;

      const data = await fetch(url);
      const result = await data.json();

      setMainPage(result.data);
  }

  useEffect(() => {
    createGallery();
    getRandomPage();
  }, []);

  return (
    <><video
    id='background_video'
      className='background__video'
      autoPlay
      loop
      muted>
      <source src='/backgroundmuseum.mp4' />
    </video>
    <MainGallery 
    pageData={mainPage}/></>)
}
