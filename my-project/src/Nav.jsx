import  { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <a href="#" className="px-3 py-2 text-white">Home</a>
              <a href="#" className="px-3 py-2 text-white">About</a>
              <a href="#" className="px-3 py-2 text-white">Services</a>
              <a href="#" className="px-3 py-2 text-white">Contact</a>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full">
            <a href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-white hover:bg-gray-700">Home</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-white hover:bg-gray-700">About</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-white hover:bg-gray-700">Services</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-white hover:text-white hover:bg-gray-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

