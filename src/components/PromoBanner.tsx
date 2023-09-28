import React from 'react'
import illustrationWorking from '../assets/illustration-working.svg'
import { Grid, Container, Typography, Button } from '@mui/material'

function PromoBanner() {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2} className='promo-box'>
                <Grid item xs={12} md={6} lg={6} className='desktop-text'>
                    <h1 className='promo-title'>More than just  shorter links</h1>
                    <div className='promo-subtitle'>
                        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    </div>
                    <button className='btn'>Get Started</button>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <div className="promo-banner">
                        <img src={illustrationWorking} alt="illustration-working" />
                    </div>
                </Grid>
                <Grid item xs={12} md={12} lg={12} className='mobile-text'>
                    <h1 className='promo-title'>More than just <br /> shorter links</h1>
                    <div className='promo-subtitle'>
                        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    </div>
                    <button className='btn'> Get Started</button>
                </Grid>
            </Grid>
            <div className='blank-space'>&nbsp;</div>
            <div className='blank-space'>&nbsp;</div>
        </Container>
    )
}

export default PromoBanner