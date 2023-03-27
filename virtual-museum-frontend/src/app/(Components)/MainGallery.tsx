import React, { useEffect, useState } from 'react'
import  {Data} from '../(Interfaces)/interfaces'
import Artworks from './Artworks';

const MainGallery = () => {

    const [mainPage, setMainPage] = useState<Data[]>();

    const getRandomPage = async() => {
        console.log("I fire")
        const totalPages = 9964;
        const limit = 8;
        const fields = "id,title,place_of_origin,department_title,department_id,gallery_title,gallery_id,artist_display,image_id";
        const url = `https://api.artic.edu/api/v1/artworks?fields=${fields}&limit=${limit}&page=${Math.floor(Math.random() * totalPages)}`;

        const data = await fetch(url);
        const result = await data.json();

        setMainPage(result.data);
    }

    useEffect(() => { 
       getRandomPage()
    }, []);

  return (
    <div className='placeholder__div'>
   {mainPage?.map((element) => {
        return <Artworks
        key={element.id}
        artist_display = {element.artist_display}
        title = {element.title}
        place_of_origin = {element.place_of_origin}
        image_id = {element.image_id} />
})}
    </div>
  )
}

export default MainGallery