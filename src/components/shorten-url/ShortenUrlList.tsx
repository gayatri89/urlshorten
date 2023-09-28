import { List, ListItem, ListItemButton, Container, ListItemText, Button, Divider } from '@mui/material'
import React, { useState } from 'react'
import { shortenUrl } from '../../api/shorten-url-api';

interface ListProps {
    urls: { originalUrl: string; shortenedUrls: string }[];
}

const ShortenUrlList: React.FC<ListProps> = ({ urls }) => {

    const [copyButtonText, setCopyButtonText] = useState('Copy');

    const copyToClipboard = (url: string) => {
        navigator.clipboard.writeText(url)
    };

    return (
        <Container maxWidth='lg'>
            <List className='list-desktop'>
                {urls.map((url, index) => (

                    <ListItem key={index} component="div" className='list-raw'>
                        <ListItemText>{url.originalUrl}</ListItemText>
                        <ListItemText sx={{ textAlign: 'end', padding: '0 20px' }}>
                            <a href={url.shortenedUrls} target="_blank" rel="noopener noreferrer" className='shorten-link'>
                                {url.shortenedUrls}
                            </a>
                        </ListItemText>
                        <Button variant='outlined' onClick={() => copyToClipboard(url.shortenedUrls)} className='btn'>{copyButtonText}</Button>
                    </ListItem>

                ))}
            </List>

            <div className='list-mobile'>
                {urls.map((url, index) => (

                    <>
                        <List>
                            <ListItem key={index} component="div" className='list-raw'>
                                <ListItemText className='original-url'>{url.originalUrl}</ListItemText>
                            </ListItem>
                            <Divider />
                            <ListItem key={index} component="div" className='list-raw'>
                                <ListItemText sx={{ textAlign: 'start' }}>
                                    <a href={url.shortenedUrls} target="_blank" rel="noopener noreferrer" className='shorten-link'>
                                        {url.shortenedUrls}
                                    </a>
                                </ListItemText>
                            </ListItem>
                            <ListItem key={index} component="div" className='list-raw'>

                                <Button variant='outlined' fullWidth onClick={() => copyToClipboard(url.shortenedUrls)} className='btn'>{copyButtonText}</Button>
                            </ListItem>
                        </List>



                    </>


                ))}
            </div>
        </Container>
    )
}

export default ShortenUrlList