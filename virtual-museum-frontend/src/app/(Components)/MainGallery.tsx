import React, { useEffect, useState } from 'react'
import  {Data} from '../(Interfaces)/interfaces'

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
        return <p key={element.id} className='placeholder__p'>{element.title}</p>
})}
    </div>
  )
}

export default MainGallery