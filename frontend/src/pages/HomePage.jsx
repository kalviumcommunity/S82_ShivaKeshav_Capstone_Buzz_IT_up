import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const newsData = [
  {
    title: "Breaking: Global Tech Advances",
    description: "The tech world is abuzz with AI advancements and breakthroughs in quantum computing.",
    imageUrl: "https://via.placeholder.com/300",
    url: "https://example.com",
  },
  {
    title: "Health: Wellness Trends in 2025",
    description: "Discover the latest in holistic health and modern medical breakthroughs.",
    imageUrl: "https://via.placeholder.com/300",
    url: "https://example.com",
  },
  {
    title: "Economy: Markets on the Rise",
    description: "Global stock markets see significant gains amidst promising economic forecasts.",
    imageUrl: "https://via.placeholder.com/300",
    url: "https://example.com",
  },
  {
    title: "Sports: Championship Highlights",
    description: "Relive the most thrilling moments from last night's championship games.",
    imageUrl: "https://via.placeholder.com/300",
    url: "https://example.com",
  },
  {
    title: "Environment: Green Initiatives",
    description: "Innovative solutions for a sustainable future are making waves worldwide.",
    imageUrl: "https://via.placeholder.com/300",
    url: "https://example.com",
  },
];

const NewsCard = ({ title, description, imageUrl, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-4 rounded-lg shadow-md bg-gray-200 transform transition hover:scale-105 hover:shadow-lg"
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-40 object-cover rounded-lg mb-4"
    />
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-700 text-sm">{description}</p>
  </a>
);

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto p-6 flex-1">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Trending News
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
