import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { shortenUrl } from './api/shorten-url-api';
import Footer from './components/Footer';
import { Box, Container } from '@mui/material';
import ShortenUrlForm from './components/shorten-url/ShortenUrlForm';
import ShortenUrlList from './components/shorten-url/ShortenUrlList';
import PromoBanner from './components/PromoBanner';
import StatisticsBoard from './components/StatisticsBoard';
import BoostComponent from './components/BoostComponent';

function App() {
  const [shortenedUrls, setShortenedUrls] = useState<{ originalUrl: string; shortenedUrls: string }[]>([]);

  useEffect(() => {
    // Retrieve the shortened list from localStorage 
    const savedShortenedUrls = localStorage.getItem('shortenedUrls');
    if (savedShortenedUrls) {
      setShortenedUrls(JSON.parse(savedShortenedUrls));
    }
  }, []);

  const handleShortenUrl = async (originalUrl: string) => {
    //Api Call
    const shortenedUrl = await shortenUrl(originalUrl);
    if (shortenedUrl) {
      const updatedUrls = [...shortenedUrls, { originalUrl: originalUrl, shortenedUrls: shortenedUrl }];
      setShortenedUrls(updatedUrls);

      // Save the updated shortened urls list of to localStorage
      localStorage.setItem('shortenedUrls', JSON.stringify(updatedUrls));
    }
  };

  return (
    <Box>
      <Header />
      <PromoBanner />
      <section className='shorten-section'>
        <ShortenUrlForm onShorten={handleShortenUrl} />
        <ShortenUrlList urls={shortenedUrls} />
        <StatisticsBoard />
      </section>
      <section className='boost-section'>
        <BoostComponent />
      </section>
      <Footer />

    </Box>
  );
}

export default App;
