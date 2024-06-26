import  { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-blue-500 text-white xl:bg-[url('/src/images/background1.jpg')]  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  h-20 ">
          <div className="flex justify-between w-full md:hidden ">
            <h2 className='text-2xl font-bold'>Space</h2>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md  hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:flex justify-between md:w-full md:text-2xl">
            <h2 className='text-4xl'>Space</h2>
            <div className="flex space-x-4 ">
              <a href="#" className="px-3 py-2 text-white  ">Home</a>
              <a href="#" className="px-3 py-2 text-white">Destination</a>
              <a href="#" className="px-3 py-2 text-white">Our crew</a>
              <a href="#" className="px-3 py-2 text-white">Services</a>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div>
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full text-2xl flex flex-col items-center rounded-full">
            <a href="#" className="block px-24 rounded-full py-2  font-medium text-white hover:text-white hover:bg-blue-400 animate-slideFastest">Home</a>
            <a href="#" className="block px-24 rounded-full py-2  font-medium text-white hover:text-white hover:bg-blue-400 animate-slideFaster">Destination</a>
            <a href="#" className="block px-24 rounded-full py-2  font-medium text-white hover:text-white hover:bg-blue-400 animate-slideFast">Our crew</a>
            <a href="#" className="block px-24 rounded-full py-2  font-medium text-white hover:text-white hover:bg-blue-400 animate-slideMedium">Services</a>
          </div>
        </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

