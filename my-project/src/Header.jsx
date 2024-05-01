import Navbar from "./Nav.jsx"


function Header() {
return (
  <>
    <header className="h-fit w-screen bg-blue-600 text-white flex justify-between px-10 py-6 text-2xl  " >
      <h1>Moving</h1>
      <div  >
        <Navbar />
      </div>
    </header>
  </>
)
}

export default Header
