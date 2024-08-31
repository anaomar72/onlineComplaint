import React from 'react';
import Header from '../Components/Header';
import { NavLink } from 'react-router-dom';

function Home() {
  return (

    <div>
      <Header/>
    <div className="min-h-[550px] bg-stone-500 text-white">
    
      <div className="flex items-center justify-center py-20">
        <div className="text-center ">
          <h2 className="text-5xl font-extrabold mb-6 mt-5">Welcome to Note-taking</h2>
          <p className="text-xl mb-8 mt-5">Your personal note-taking companion, wherever you go.</p>
          <NavLink to='/add'><button className="bg-white text-teal-500 font-bold py-3 px-6 rounded-md shadow-lg hover:bg-gray-100 transition-colors">  
            Send Note
          </button>
          </NavLink>
        </div>
           </div>
           <div className='bg-neutral-400 text-white text-center py-8 text-3xl mt-48'>
            <h1>All rights are reserver</h1>
           </div>

    
    

  
     
    </div>
    </div>
  );
}

export default Home;
