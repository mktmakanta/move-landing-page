function Content() {
return (
  <>
    <div
    className=" text-center space-y-6 p-8 font-semiboldbold text-lg  text-slate-300 bg-[url('/src/images/background1.jpg')]">
        <h3 className="text-2xl ">SO, YOU WANT TO TRAVEL</h3>
        <h1 className="text-8xl text-white pb-8">SPACE</h1>
        <p className="pb-16 text-balance text-xl">Lets Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus ut recusandae dolores placeat labore, molestias molestiae aliquam, error adipisci inventore explicabo optio? Obcaecati doloremque voluptatum debitis, veniam est necessitatibus.</p>
        <div className="w-44 h-44  bg-white flex justify-center items-center rounded-full mx-auto mb-32 font-semibold text-2xl text-slate-700 ">EPLORE</div>
    </div>
    <div
    className="px-4  text-white  w-full bg-[url('/src/images/background2.jpg')]"
    >
        <div>
          <h3 className="text-2xl py-4"><span className="text-gray-500 mr-2 font-bold">01</span>PICK YOUR DESTINATION</h3>
          <img src="src/images/image1.png"  alt="mass image" className="h-4/5 w-4/5 mx-auto" />
        </div>
        <div>
          <ul className="flex justify-between  mx-10 mb-10  text-slate-400 text-xl"> 
            <li>MOON</li>
            <li className="border-b-2 border-white ">MARS</li>
            <li>EUROPA</li>
            <li>TITAN</li>
          </ul>
          <h1 className="text-8xl text-white pb-8">MARS</h1>
          <p className=" text-slate-400 text-xl text-wrap border-b-2 border-slate-400 pb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint labore quidem nihil! Ex odit sed fugit esse except dolor sit amet consectetur adipisicing elit. Dolorum corporis cumque dignissimos perspiciatis possimus fuga quisquam! Temporibus nobis laboriosam quis.</p>
          <div className="flex justify-between w-4/5 mt-5">
            <div>
              <h3 className="text-slate-400 text-sm">AVG. DISTANCE</h3>
              <h2 className="text-3xl mt-2 mb-4">225 MILL.KM</h2>
            </div>
            <div>
              <h3 className="text-slate-400 text-sm">EST. TRAVEL TIME</h3>
              <h2 className="text-3xl mt-2 mb-4">9 MONTHS</h2>
            </div>
            

          </div>

        </div>
    </div>
    <div>
        <div>
          <h3><span>02</span>MEET YOUR CREW</h3>
          <div>
            <h3>FLIGHT ENGINEER</h3>
            <h2>ANOUSHEH ANSARI</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatum eaque quo animi facilis perferendis molestiae, odio aut iste. Fuga, optio ratione? Veniam, voluptatem quae?</p>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>


    </div>
    <div>
      <div>
        <h3><span>01</span>PICK YOUR DESTINATION</h3>
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <div>
            <h5>THE TECHNOLOGY</h5>
            <h2>LAUNCH VEHICLE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus aliquam itaque excepturi quaerat qui expedita nemo, cum ipsam, aut dolore sapiente. Deserunt ea iure vero culpa esse non blanditiis cum! Quae nam perspiciatis doloremque quas.</p>
          </div>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  </>
)
}

export default Content