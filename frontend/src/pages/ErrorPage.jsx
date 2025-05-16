import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ErrorPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold">Something went wrong!</h2>
        <p>Please try again later.</p>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
