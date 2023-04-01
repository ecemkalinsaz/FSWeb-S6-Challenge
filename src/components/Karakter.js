import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function Karakter(props) {
    console.log(props.kisi, ' PROPS')

    const [gezegen, setGezegen] = useState(''); 

    const kisi = props.kisi

    useEffect(() => {
        axios.get(kisi.homeworld, {
        params: {
        }
        })
        .then(function (response) {
        setGezegen(response.data.name)
        })
        .catch(function (error) {
        console.log(error);
        })
    }, [])

    return (
       <Accordion className='accordion-item'>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{ kisi.name }</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p><strong>gender:</strong> {kisi.gender}</p>
            <p><strong>hair color:</strong> {kisi.hair_color}</p>
            <p><strong>height:</strong> {kisi.height}</p>
            <p><strong>homeworld:</strong> { gezegen }</p>
            <p><strong>mass: </strong>{kisi.mass}</p>
            <p><strong>skin color:</strong> {kisi.skin_color}</p>
            <p><strong>movies: </strong>{ kisi.films.join(', ') }</p>
         </Typography>
        </AccordionDetails>
      </Accordion>
    )
}