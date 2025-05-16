import React from "react";

const NewsCard = ({ title, description, imageUrl, url }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover rounded-md" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p> 
      <a href={url} target="_blank" className="text-blue-500 mt-4 inline-block">Read more</a>
    </div>
  );
};

export default NewsCard;
//components in frontend