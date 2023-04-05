'use client'

import React, {useEffect, useState} from 'react'
import {Data} from '../(Interfaces)/interfaces';
import {Box, Grid, IconButton, Typography} from '@mui/material';
import Artworks from '../(Components)/Artworks';
import Link from "next/link";
import {ArrowBackIos, ArrowForwardIos, NorthEast, NorthWest, SouthEast} from "@mui/icons-material";
import {useRouter} from 'next/navigation';
import Image from "next/image";

const AppliedArtsOfEurope = () => {
    const [page, setPage] = useState<Data[]>();
    const router = useRouter();

    const getSpecificDepartment = async () => {
        const limit = 16;
        const maxPages = 62;
        const fields = "id,title,place_of_origin,department_title,thumbnail,department_id,artist_display,image_id";
        const url = `https://api.artic.edu/api/v1/artworks/search?q=Applied Arts Of Europe&fields=${fields}&limit=${limit}&page=${Math.floor(Math.random() * maxPages)}`;

        const result = await (await fetch(url)).json();
        setPage(result.data)
    }

    useEffect(() => {
        getSpecificDepartment()
    }, [])

    return (
        <main
            className='PC__page'>
            <Image
                height={0}
                width={0}
                src={'https://images.unsplash.com/photo-1617445544584-ffc4aad88452?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                }
                alt='Image of Applied arts of  gallery'
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
                    color: 'white'
                }}>
                <Typography
                    sx={{borderBottom: 'solid white 0.125rem'}}
                    variant='h2'><Link
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}
                    href={'/PC-9'}>Applied Arts of Europe</Link></Typography>
            </Box>
            <Box
                sx={{
                    position: 'sticky',
                    flexDirection: 'row',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    top: '50%'
                }}>
                <IconButton
                    sx={{
                        color: 'white',
                        position: 'absolute'
                    }}
                    size='large'
                    onClick={() => router.push('/PC-10')}>
                    <ArrowForwardIos
                        fontSize='inherit'/>
                </IconButton>
            </Box>
            <Box
                sx={{
                    position: 'sticky',
                    flexDirection: 'row',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    top: '50%'
                }}>
                <IconButton
                    sx={{
                        color: 'white',
                        position: 'absolute'
                    }}
                    size='large'
                    onClick={() => router.push('/PC-8')}>
                    <ArrowBackIos
                        fontSize='inherit'/>
                </IconButton>
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    top: '13.5%',
                    flexDirection: 'row',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                <IconButton
                    sx={{
                        color: 'white',
                        position: 'absolute'
                    }}
                    size='large'
                    onClick={() => router.push('/PC-9/Room1')}>
                    <NorthEast
                        sx={{fontSize: 'xxx-large'}}/>
                </IconButton>

            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: '13.5%',
                    flexDirection: 'row',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}>
                <IconButton
                    sx={{
                        color: 'white',
                        position: 'absolute'
                    }}
                    size='large'
                    onClick={() => router.push('/PC-9/Room2')}>
                    <NorthWest
                        sx={{fontSize: 'xxx-large'}}/>
                </IconButton>

            </Box>

            <Box
                sx={{
                    position: 'sticky',
                    flexDirection: 'row',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    top: '90%'
                }}>
                <IconButton
                    sx={{
                        color: 'white',
                        position: 'absolute', fontSize: 'xxx-large'
                    }}
                    size='large'
                    onClick={() => router.push('/PC-9/Room3')}>
                    <SouthEast
                        sx={{fontSize: 'xxx-large'}}/>
                </IconButton>
            </Box>
            <Grid container
                  className='gallery__grid'
            >
                {page?.filter((element) => element.image_id).map((element) => {
                    return <Artworks
                        key={element.id}
                        id={1}
                        department_title={element.department_title}
                        department_id={element.department_id}
                        thumbnail={element.thumbnail}
                        artist_display={element.artist_display}
                        title={element.title}
                        place_of_origin={element.place_of_origin}
                        image_id={element.image_id}/>;
                })}
            </Grid>
        </main>
    )
}

export default AppliedArtsOfEurope