import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">BuzzItUp</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/saved" className="hover:text-yellow-300">Saved</a></li>
            <li><a href="/login" className="hover:text-yellow-300">Login</a></li>
            <li><a href="/signup" className="hover:text-yellow-300">Signup</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
//created components in react
