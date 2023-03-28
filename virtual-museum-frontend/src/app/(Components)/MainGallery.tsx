import React, { useEffect, useState } from 'react'
import  {Data} from '../(Interfaces)/interfaces'
import Artworks from './Artworks';

const MainGallery = () => {

    const [mainPage, setMainPage] = useState<Data[]>();

    const getRandomPage = async() => {
        const totalPages = 9964;
        const limit = 8;
        const fields = "id,title,place_of_origin,department_title,thumbnail,department_id,gallery_title,gallery_id,artist_display,image_id";
        const url = `https://api.artic.edu/api/v1/artworks?fields=${fields}&limit=${limit}&page=${Math.floor(Math.random() * totalPages)}`;

        const data = await fetch(url);
        const result = await data.json();

        setMainPage(result.data);
    }

    useEffect(() => { 
       getRandomPage()
    }, []);

  return (
    <section className='image__container'>
   {mainPage?.map((element) => {
        return <Artworks
        key={element.id}
        thumbnail={element.thumbnail}
        artist_display = {element.artist_display}
        title = {element.title}
        place_of_origin = {element.place_of_origin}
        image_id = {element.image_id} />
})}
    </section>
  )
}

export default MainGallery