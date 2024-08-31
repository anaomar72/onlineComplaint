import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-stone-200 shadow-2xl shadow-white ">
      <h1 className="text-3xl font-bold">Note</h1>
      <div className="flex items-center space-x-6">
        <ul className="flex space-x-6">
          
      
      
      <NavLink to='/notes'>

          <li className="hover:text-gray-200">AllNotes</li> </NavLink> 
          
        </ul>
       
       <NavLink to='/search'>
       <button className="bg-white text-teal-700 font-bold py-2 px-4 rounded-md shadow-md hover:bg-gray-100">
        
          Search
      </button>  
      </NavLink>
      </div>
    </header>
  );
};

export default Header;
