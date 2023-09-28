const API_BASE_URL = 'https://api.shrtco.de/v2';

export const shortenUrl = async (originalUrl: string): Promise<string | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/shorten?url=${encodeURIComponent(originalUrl)}`);
    const data = await response.json();
      if (data.ok) {
      return data.result.short_link;
    }
    return null;
  } catch (error) {
    console.error('Error shortening URL:', error);
    return null;
  }
};
