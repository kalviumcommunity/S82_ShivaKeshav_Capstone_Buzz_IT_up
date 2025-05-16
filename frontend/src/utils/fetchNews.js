export const fetchNews = async () => {
    try {
      const response = await fetch('https://api.example.com/news');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  };
  