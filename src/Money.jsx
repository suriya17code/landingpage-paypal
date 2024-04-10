import React from 'react'

const Money = () => {
  return (
    <section className='  bg-[#f7f5f0] p-6 mt-14'>
        <div className='flex justify-center mx-2 md:mx-6 lg:mx-10'>
           <div className=' divided flex flex-wrap  justify-center '>
            {/* left */}
             <div className='lg:max-w-[50%]  md:max-w-[50%] mb-5'>
               <img className=' w-[100%] h-[100%]' src='.\src\assets\money.png' alt='money'/>
             </div >
             {/* right */}
             <div className=' lg:max-w-[50%] md:max-w-[50%]  '>
               <h3 className='text-5xl my-10 font-semibold'>Make Payments</h3>
               <h4 className='text-3xl mb-3 '>Payouts</h4>
               <p className='md:max-w-[95%]  lg:max-w-[100%] text-gray-700 mb-5 font-semibold text-lg '>Code a solution to send mass 
                payments to contract workers,
                 claimants, freelancers,
                 and sellers around the world</p>
               <a className='text-blue-600 font-bold hover:underline text-lg mt-4'>Get started</a>
             </div>
           </div>
        </div>
    </section>
  )
}

export default Money