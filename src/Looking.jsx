import React from 'react'

const Looking = () => {
  return (
    <section className='looking pt-11  py-7 '>
     <div className='px-6 mx-13 lg:mx-6 flex '>
        <div className='container flex flex-wrap  justify-center pt-7 mx-auto'>
          {/* left */}
          <div className='lg:max-w-[70%]  h-auto'>
            <h3 className='text-5xl pb-5'>
            Looking for something else?
            </h3>
            <p className='text-xl w-[90%]'>If you need additional help, check out our support articles, community resources, and more.</p>
          <div className='btn py-5'>
            <button  className='bg-blue-800 text-white py-2 text-xl font-semibold hover:bg-blue-600 rounded-full w-full md:w-[30%] lg:w-[22%]'> Find Support</button>
          </div>
          <div className='list '>
             <ul className='flex py-3 '>
                <li className='text-xl font-bold py-4 px-4'><a>FAQs</a></li>
                <li className='text-xl font-bold py-4 px-4'><a>Community</a></li>
                <li className='text-xl font-bold py-4 px-4'><a>Blog</a></li>
                <li className='text-xl font-bold py-4 px-4'><a>Docs Archive</a></li>
             </ul>
          </div>
          </div>
          {/* right */}
          <div className='lg:max-w-[30%]'>
            <div className='px-5'>
              <img src='\src\assets\looking.png ' alt=''/>
            </div>
          </div>
        </div>
     </div>
    </section>
  )
}

export default Looking