import React from 'react'





const Nav = () => {

  

  return (
    <div className=' sticky top-0 z-10'>
      <header className='p-3 shadow-xl bg-[#ff5200] h-[10%]'>
        <div className='max-w-[1200px] mx-auto  flex items-center'>
          <div className='w-[100px]'>
            <img className=" w-[70%] rounded-full border-2 border-white" src="images/Logo 2.png" alt="Logo" />


          </div>
          <div className='font-black ml-3 text-white text-4xl'>
            Hungry buddy
          </div>
          <div className='text-white ml-auto'>
            <nav className='flex items-center ml-auto gap-10'>
              <h1 className="cursor-pointer transition duration-300 hover:underline">Hungry corporate</h1>
              <h1 className="cursor-pointer transition duration-300 hover:underline">Contact us</h1>
              <button className="border-2 rounded-lg px-6 py-3 text-lg transition duration-300 transform hover:scale-105 hover:bg-gray-800 cursor-pointer">Get App</button>
              <button className="bg-black text-white px-6 py-3 text-lg transition duration-300 transform hover:scale-105 hover:bg-gray-900 cursor-pointer rounded-full">
                Sign in
              </button>
            </nav>

          </div>

        </div>
      </header>
     
    </div>
  )
}

export default Nav
