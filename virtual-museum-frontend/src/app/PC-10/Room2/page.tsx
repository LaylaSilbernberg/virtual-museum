'use client'

import Artworks from '@/app/(Components)/Artworks';
import { Data } from '@/app/(Interfaces)/interfaces';
import {Box, Grid, IconButton, Typography} from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/navigation';
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import Image from "next/image";

const PCRoom1 = () => {
    const [page, setPage] = useState<Data[]>();
    const router = useRouter();

    const getSpecificDepartment = async() => {
        const limit=16;
        const maxPages=62;
        const fields = "id,title,place_of_origin,department_title,thumbnail,department_id,artist_display,image_id";
        const url = `https://api.artic.edu/api/v1/artworks/search?q=Painting And Sculpture Of Europe&fields=${fields}&limit=${limit}&page=${Math.floor(Math.random() * maxPages)}`;

        const result = await (await fetch(url)).json();
        setPage(result.data)
    }

    useEffect(() => {getSpecificDepartment()}, [])

  return (
    <main
    className='PC__page'>

        <Image
            height={0}
            width={0}
            src={'https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            alt='Image of Paintings and Sculpture of Europe'
            style={{
                position: 'fixed',
                right: '0',
                bottom: '0',
                minWidth: '100%',
                minHeight: '100%',
                zIndex: '-1'
            }}/>
      <Box
      display={'flex'}
      justifyContent={'center'}
      sx={{
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      padding: '1rem 1.25rem',
      color: 'white'}}>
        <Typography
        sx={{borderBottom:'solid white 0.125rem'}}
        variant='h2'><Link
        style={{textDecoration: 'none',
      color: 'white'}}
        href={'/PC-10'}>Painting And Sculpture Of Europe</Link></Typography>
      </Box>

        <Box
            sx={{position: 'sticky',
                flexDirection: 'row',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                top: '50%'}}>
            <IconButton
                sx={{color: 'white',
                    position:'absolute'}}
                size='large'
                onClick={() => router.push('/PC-9')}>
                <ArrowBackIos
                    fontSize='inherit'/>
            </IconButton>
        </Box>

        <Box
            sx={{position: 'sticky',
                flexDirection: 'row',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                top: '50%'}}>
            <IconButton
                sx={{color: 'white',
                    position:'absolute'}}
                size='large'
                onClick={() => router.push('/PC-11')}>
                <ArrowForwardIos
                    fontSize='inherit'/>
            </IconButton>
        </Box>

                <Grid container
          className='gallery__grid'
        >
          {page?.map((element) => {
            return <Artworks
              key={element.id}
              id={52}
              department_title={element.department_title}
              department_id={element.department_id}
              thumbnail={element.thumbnail}
              artist_display={element.artist_display}
              title={element.title}
              place_of_origin={element.place_of_origin}
              image_id={element.image_id} />;
          })}
        </Grid>
    </main>
  )
}

export default PCRoom1