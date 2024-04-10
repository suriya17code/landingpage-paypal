import React from 'react'

const Hero = () => {
  return (
    
    <section className=" lg:pl-13 bg-[#121661] pt-15 pb-12">
    <div className="container mx-auto px-5 text-left">
        <h2 className='text-[#d1f1ff] opacity[0.7] font-semibold text-2xl mb-8 mt-4'>PayPal Developer</h2>
      <h1 className="text-5xl font-semibold text-white mb-4">
      Build a payment solution that's right for you.
      </h1>
      <p className="text-white text-lg mb-8 mt-12">
        Find the resources you need to test and 
      go live with online, mobile, or in-person payment solutions
      </p>
      <button className="bg-yellow-500 text-indigo-950 hover:text-sky-800  text-xl font-semibold  py-3 px-6 rounded-3xl">
        Get API Credentials
      </button>
    </div>
  </section>

  )
}

export default Hero