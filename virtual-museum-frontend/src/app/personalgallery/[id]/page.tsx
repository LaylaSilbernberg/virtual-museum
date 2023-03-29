import React, { useEffect, useState } from 'react'
import MainGallery from '../../(Components)/MainGallery';
import { Data } from '../../(Interfaces)/interfaces';

const page = ({params} : {params: {id: string}}) => {
//http://virtualmuseumappreal.azurewebsites.net/

const [mainPage, setMainPage] = useState<Data[]>();
const getRandomPage = async() => {
    const url = `http://virtualmuseumappreal.azurewebsites.net/api/getGallery/${params.id}`;

    const data = await fetch(url);
    const result = await data.json();

    setMainPage(result.data);
}

useEffect(() => { 
   getRandomPage()
}, []);

    
    
  return <div>
    page
  </div>;
  
}

export default page