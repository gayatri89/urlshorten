import { Card, CardMedia, CardContent, Container, Typography, Grid } from '@mui/material'
import React from 'react'
import brand from '../assets/icon-brand-recognition.svg';
import detailedRecord from '../assets/icon-detailed-records.svg';
import fullyCustomizable from '../assets/icon-fully-customizable.svg';

function StatisticsBoard() {
    return (
        <Container maxWidth='lg' sx={{ textAlign: 'center' }}>
            <div>
                <h3>Advanced Statistics</h3>
                <div className='promo-subtitle'>Track how your links are performing across the web with our advanced statistics dashboard.</div>
            </div>
            <div className='blank-space'>&nbsp;</div>
            <div className='statistics-box '>

                <div className="card card-one">
                    <div className='card-header'>
                        <img src={brand} alt="brand recognition" />
                    </div>
                    <div className="card-content">
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                </div>
                <div className="card card-two">
                    <div className='card-header'>
                        <img src={detailedRecord} alt="detailed record" />
                    </div>
                    <div className="card-content">
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                </div>
                <div className="card card-three">
                    <div className='card-header'>
                        <img src={fullyCustomizable} alt="fully customizable" />

                    </div>
                    <div className="card-content">
                        <h3>Fully Customizable</h3>
                        <p>Improve brand awerness and content discoverability through customizable links. supercharging audience engagement.</p>
                    </div>
                </div>
            </div>
            <div className='blank-space'>&nbsp;</div>

        </Container>
    )
}

export default StatisticsBoard