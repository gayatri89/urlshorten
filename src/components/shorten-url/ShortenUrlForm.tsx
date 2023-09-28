import { Container, Button, TextField, Grid, FormControl } from '@mui/material'
import React, { useState } from 'react'

interface UrlFormProps {
    onShorten: (url: string) => void;
}

const ShortenUrlForm: React.FC<UrlFormProps> = ({ onShorten }) => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Empty URL Validation
        if (!url) {
            setErrorMessage('Please add a link');
            setError(true)
            return;
        }

        // validate URL 
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

        if (!urlPattern.test(url)) {
            setErrorMessage('Please add a valid link');
            setError(true)
            return;
        }

        setErrorMessage('');

        onShorten(url);
    };

    return (
        <Container maxWidth='lg' className='shorten-bg'>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={8}>
                        <TextField id="outlined-basic" fullWidth
                            sx={{ background: '#fff', borderRadius: 2 }}
                            error={error}
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            label="Shorten a link here..." variant="outlined" />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}

                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <button className="btn" type="submit" style={{ width:'100%', textTransform: 'capitalize', borderRadius:0 }}>Shorten It!</button>
                    </Grid>
                </Grid>

            </form>

        </Container>
    )
}

export default ShortenUrlForm