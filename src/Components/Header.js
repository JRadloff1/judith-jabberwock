import React from "react";
import Navigation from './Navigation';

function Header() {
  return (
    <header 
    className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 border-b p-3 flex justify-between items-center">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Judith Jabberwock
        </h1>
        <p className="animate-bounce px-6 ">~ Welcome to Nonesense! ~</p>
     </div>
      <Navigation />
    </header>
  );
}

export default Header;
