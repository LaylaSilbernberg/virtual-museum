'use client'
import { Box, Typography } from "@mui/material"

const About = () => {

    return (

        <>
            <video
                id='background_video'
                className='background__video'
                autoPlay
                loop
                muted>
                <source src='/ferris.mp4' />
            </video>

           <Box 
           display={'flex'} 
           flexDirection={'column'}
           justifyContent={'left'} 
           bgcolor={''} 
           maxWidth={'fit-content'}
           sx={{
            letterSpacing: '0.15em',
            padding: '1rem 1.25rem',
            color: 'white'}}>

<h2>Welcome to our Virtual Museum!</h2>
    <p>In this Project we have attempted to digitize <br/>
    the renowned Art Institute of Chicago, as to demonstrate <br/>
    our working knowledge of a fullstack application. <br/>
    Our stack for this application are: React, Java + Spring,  <br/>
    Typescript, and PostgreSQL. Feel free to contact us! 
        
        </p>
  
           </Box>
        </>
    )
}

export default About