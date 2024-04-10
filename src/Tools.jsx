import React from 'react'

const Tools = () => {
  return (
    <section className='devloper tools '>
        <div className=' py-12 bg-[#fff0d7]'>
        <div className=' px-11 mx-11'>
         <div className='container lg:flex md:flex item-center '>
            {/* left */}
            
           <div className=' image md:w-[40%] pr-3 lg:w-[50%]'>
             <div className=' title mt-8 mb-5'>
                 <h3 className='text-5xl font-semibold xl:w-[70%] '> Developer Tolls & Resources</h3>
             </div>
             <div className='image flex '>
              <img className='items-start' src='.\src\assets\doll.png' alt=''/>
             </div>
           </div>
           {/* right */}
           <div  className=' cards md:w-[60%] lg:w-[50%]'>
{/*  1 */} <div className='container '> 
                 <div className='bg-white rounded-3xl xl:max-w-[80%] p-5 pb-10 mb-6'>
              <div className='flex justify-center items-center '>
                      <div className='px-5  justify-start mb-auto flex'>
                      <div className='mt-0  justify-start'>
                      <img width="90" height="90" src="https://img.icons8.com/ios-filled/100/FA5252/bank-card-back-side.png" alt="bank-card-back-side"/>
                       </div>
                      </div>
                      <div>
                        <h3 className='text-3xl '>Demo Portal</h3>
                        <div>
                            <p className='text-gray-600 max-w-[85%]  text-lg pt-6'>
                            Explore PayPal product experiences 
                            from the customer's perspective.
                            </p>
                        </div>
                        <div className=''>
                          <h2 className='text-blue-600 font-bold text-lg hover:underline pt-3'>
                            <a>
                            View Demos
                            </a>
                            </h2>
                        </div>
                      </div>
                  </div>
                 </div>
               </div>
{/*  2 */} <div className='container '> 
                 <div className='bg-white rounded-3xl xl:max-w-[80%] p-5 pb-10 mb-6'>
              <div className='flex justify-center items-center '>
                      <div className='px-5  justify-start mb-auto flex'>
                      <div className='mt-0  justify-start'>
                      <img width="100" height="100" src="https://img.icons8.com/sf-black/100/FA5252/source-code.png" alt="source-code"/>
                       </div>
                      </div>
                      <div>
                        <h3 className='text-3xl '>API Executor</h3>
                        <div>
                            <p className='text-gray-600 max-w-[85%]  text-lg pt-6'>
                            Try out PayPal API requests and responses 
                            in multiple programming languages.
                            </p>
                        </div>
                        <div className=''>
                          <h2 className='text-blue-600 font-bold text-lg hover:underline pt-3'>
                            <a>
                            Try APIs
                            </a>
                            </h2>
                        </div>
                      </div>
                  </div>
                 </div>
               </div>
{/*  3 */}  <div className='container '> 
                 <div className='bg-white rounded-3xl xl:max-w-[80%] p-5 pb-10 mb-6'>
              <div className='flex justify-center items-center '>
                      <div className='px-5  justify-start mb-auto flex'>
                      <div className='mt-0  justify-start'>
                      <img width="100" height="100" src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/100/FA5252/external-laptop-electronics-device-kmg-design-glyph-kmg-design.png" alt="external-laptop-electronics-device-kmg-design-glyph-kmg-design"/>
                       </div>
                      </div>
                      <div>
                        <h3 className='text-3xl '>Sandbox Testing Guide</h3>
                        <div>
                            <p className='text-gray-600 max-w-[85%]  text-lg pt-6'>
                            Learn how to test and go live with your integration with the PayPal Sandbox..
                            </p>
                        </div>
                        <div className=''>
                          <h2 className='text-blue-600 font-bold text-lg hover:underline pt-3'>
                            <a>
                            Learn More
                            </a>
                            </h2>
                        </div>
                      </div>
                  </div>
                 </div>
               </div>
           </div>
         </div>
         </div>
        </div>
    </section>
  )
}

export default Tools