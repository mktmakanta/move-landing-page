function Content() {
return (
  <>
    <div
    className=" text-center space-y-6 p-8 md:p-16 md:px-52  xl:px-44 xl:h-screen font-semiboldbold text-lg  text-slate-300 bg-[url('/src/images/background1.jpg')] bg-no-repeat bg-center bg-cover xl:flex justify-center items-center">
      <div className=" xl:grid xl:grid-cols-2 justify-center xl:h-2/4">
      <div className="xl:text-left xl:flex  flex-col justify-center ">
        <h3 className="text-2xl xl:text-3xl xl:mb-5 ">SO, YOU WANT TO TRAVEL</h3>
        <h1 className="text-8xl md:text-9xl xl:font-bold text-white pb-8 xl:mb-8">SPACE</h1>
        <p className="pb-16 text-balance text-xl xl:text-2xl">Lets Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus ut recusandae dolores placeat labore, molestias molestiae aliquam, error adipisci inventore explicabo optio? Obcaecati doloremque voluptatum debitis, veniam est necessitatibus.</p>
        </div>
        <div className="xl:flex items-end">
        <div className="w-44 h-44 md:w-56 md:h-56 xl:h-64 xl:w-64 bg-white flex justify-center items-center rounded-full mx-auto mb-32 xl:mb-20 font-semibold text-2xl md:text-3xl text-slate-700 ">EPLORE</div>
        </div>
      </div>
    </div>
    <div
    className="px-4 md:px-10 xl:px-20 text-white  w-full bg-[url('/src/images/background2.jpg')] xl:h-screen xl:grid grid-cols-3 gap-0"
    >
        <div className="col-span-2 xl:p-0">
          <h3 className="text-2xl py-4 md:text-3xl md:pt-10 xl:pt-32"><span className="text-gray-500 mr-2 font-bold">01</span>PICK YOUR DESTINATION</h3>
          <img src="src/images/image1.png"  alt="mass image" className="h-3/5 w-3/5 mx-auto  xl:h-98 xl:w-98 xl:mt-20" />
        </div>
        <div className="col-span-1">
          <ul className="flex justify-between xl:mt-64 mx-10 md:mx-44 xl:mx-0 mb-10  text-slate-400 text-xl md:text-2xl"> 
            <li>MOON</li>
            <li className="border-b-2 border-white ">MARS</li>
            <li>EUROPA</li>
            <li>TITAN</li>
          </ul>
          <h1 className="text-8xl  text-white pb-8">MARS</h1>
          <p className=" text-slate-400 text-xl md:text-2xl text-wrap border-b-2 border-slate-500 pb-20 md:pb-44 xl:pb-32">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint labore quidem nihil! Ex odit sed fugit esse except dolor sit amet consectetur adipisicing elit. Dolorum corporis cumque dignissimos perspiciatis possimus fuga quisquam! Temporibus nobis laboriosam quis.</p>
          <div className="flex justify-between w-3/5 xl:w-full xl:justify-start gap-16 mt-5">
            <div>
              <h3 className="text-slate-400 text-sm">AVG. DISTANCE</h3>
              <h2 className="text-3xl mt-2 mb-4">225 MILL.KM</h2>
            </div>
            <div className="pb-24 md:pb-10 ">
              <h3 className="text-slate-400 text-sm">EST. TRAVEL TIME</h3>
              <h2 className="text-3xl mt-2 mb-4">9 MONTHS</h2>
            </div>
            
          </div>

        </div>
    </div>
    <div className="  px-4 bg-[url('/src/images/background3.jpg')]  bg-cover bg-center text-white text-center space-y-10 md:space-y-16 md:px-10 xl:px-32 xl:h-screen xl:flex ">
        <div className=" xl:w-5/12">
          <h3 className="text-2xl py-4 text-left md:text-3xl xl:py-32"><span className="text-gray-500 mr-2 font-bold">02</span>MEET YOUR CREW</h3>
          <div className="md:mt-6 xl:text-left "> 
            <h3 className="text-slate-600 text-2xl my-2 md:my-4 md:text-3xl">FLIGHT ENGINEER</h3>
            <h2 className="text-3xl text-slate-300 mb-5 md:text-5xl ">ANOUSHEH ANSARI</h2>
            <p className="text-gray-400 text-lg md:text-3xl xl:my-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatum eaque quo animi facilis perferendis molestiae, odio aut iste. Fuga, optio ratione? Veniam, voluptatem quae?</p>
          </div>
          <div className="flex justify-center xl:justify-start xl:mt-32 my-5 ">
            <div className="h-3 w-3 bg-slate-600 rounded-full mx-1"></div>
            <div className="h-3 w-3 bg-slate-600 rounded-full mx-1"></div>
            <div className="h-3 w-3 bg-slate-600 rounded-full mx-1"></div>
            <div className="h-3 w-3 bg-slate-100 rounded-full mx-1 "></div>
          </div>
        </div>
        <div className="flex items-end">
          <img src="src/images/image2.png" alt="" className="xl:h-98 xl:w-100"  />
        </div>


    </div>
    <div className="bg-[url('/src/images/background4.jpg')]  bg-cover bg-center  text-white  xl:h-screen xl:px-20 xl:pr-0">
        <h3 className="  text-2xl py-4 text-left md:text-3xl xl:pt-20"><span className="text-gray-500 mr-2 font-bold xl:px-10 ">03</span>SPACE LAUNCH 101</h3>
      <div className="xl:flex flex-row-reverse">
      <div className=" flex items-center">
        <img src="src/images/image3.jpg" alt=""  className="h-3/6 md:h-2/5 w-full xl:w-96 xl:h-4/5 xl:my-auto"/>
      </div>
      <div className="md:px-10 xl:w-3/5 xl:h-3/5  xl:flex items-center justify-between xl:pt-32 xl:space-x-7 ">
        
          <ul className="flex justify-center xl:flex-col xl:space-y-16">
            <li className="h-16 w-16 mb-3 mx-3 mt-7 text-2xl rounded-full bg-white text-black flex justify-center items-center border border-pink-700 ">1</li>
            <li className="h-16 w-16 mb-3 mx-3 mt-7 text-xl rounded-full text-white flex justify-center items-center border border-pink-700">2</li>
            <li className="h-16 w-16 mb-3 mx-3 mt-7 text-xl rounded-full  text-white flex justify-center items-center border border-pink-700">3</li>
          </ul>
          <div className="p-4 md:text-3xl ">
            <h5 className="text-slate-400 md:mt-10">THE TECHNOLOGY</h5>
            <h2 className="text-4xl md:my-3 md:text-6xl">LAUNCH VEHICLE</h2>
            <p className="text-slate-400 pb-16 xl:pt-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus aliquam itaque excepturi quaerat qui expedita nemo, cum ipsam, aut dolore sapiente. Deserunt ea iure vero culpa esse non blanditiis cum! Quae nam perspiciatis doloremque quas.</p>
          </div>
      
      </div>
        </div>
    </div>
  </>
)
}

export default Content