import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const SavedNewsPage = () => {
  // Sample data for saved articles
  const savedArticles = [
    {
      id: 1,
      title: "Breaking News: AI Revolutionizes Healthcare",
      description: "Discover how AI is transforming the medical industry.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Top 10 Travel Destinations for 2025",
      description: "Explore the most breathtaking places to visit next year.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Climate Change: What You Need to Know",
      description: "A comprehensive guide to understanding the climate crisis.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <header className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Saved News</h1>
      </header>

      <div className="saved-news-list mt-6">
        {savedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition duration-300"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{article.description}</p>
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-600 text-center">
            You have no saved articles yet. Start exploring!
          </p>
        )}
      </div>

      <footer className="mt-10 bg-gray-100 p-4 rounded-lg shadow-lg text-center">
        <p className="text-gray-700">&copy; 2025 BuzzItUp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SavedNewsPage;

