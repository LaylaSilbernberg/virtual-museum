'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react';
import MainGallery from './(Components)/MainGallery';
import { Data } from './(Interfaces)/interfaces';

export default function Home() {


  const [mainPage, setMainPage] = useState<Data[]>();


  const getRandomPage = async() => {
      const totalPages = 9964;
      const limit = 16;
      const fields = "id,title,place_of_origin,department_title,thumbnail,department_id,artist_display,image_id";
      const url = `https://api.artic.edu/api/v1/artworks?fields=${fields}&limit=${limit}&page=${Math.floor(Math.random() * totalPages)}`;

      const data = await fetch(url);
      const result = await data.json();

      setMainPage(result.data);
  }

  useEffect(() => {
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
