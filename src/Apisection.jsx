import React from 'react'

const Apisection = () => {
  return (
<section className="bg-gray-200 pt-12 pb-6">
        <div className="container mx-auto  px-4">
          <h2 className="text-4xl font-semibold mb-4">
            Explore our APIs &amp;  SDKs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
           
          <div className=" rounded-lg  mx-3 max-w-[85%] justify-center  "  >
              <div className='mx-3 max-w-full'>
                <div className='my-4 bg-white'>
                    <div className='logoarea h-[116px] bg-[#d5f4ee] flex flex-col justify-between '>
                    <div className='flex flex-col justify-center h-full'>
                             <div className='flex flex-row justify-center w-full'>
                             <img className=''  src='.\src\assets\image.jpg'/>
                                </div>
                                </div>
                        
                    </div>
                <div className='textarea py-[16px] px-[24px]'>
              <h3 className="text-4xl font-medium  mb-2">APIs</h3>
              <p className="text-gray-600 mb-4">
              PayPal offers APIs for new and legacy integrations.
              </p>
              <ul className=" font-bold text-blue-500 ">
                <li className="pb-3">REST APIs</li>
                <li className="pb-3">NVP/SOAP APIs</li>

                <li className="pb-3">Braintree GraphQL API</li>
              </ul>
              </div>
                </div>
              </div>
              
            </div>

            <div className=" rounded-lg  mx-3 max-w-[85%] justify-center  "  >
              <div className='mx-3 max-w-full'>
                <div className='my-4 bg-white'>
                    <div className='logoarea h-[116px] bg-[#d5f4ee] flex flex-col justify-between '>
                    <div className='flex flex-col justify-center h-full'>
                             <div className='flex flex-row justify-center w-full'>
                             <img className=''  src='.\src\assets\image2.jpg'/>
                                </div>
                                </div>
                        
                    </div>
                <div className='textarea py-[16px] px-[24px]'>
              <h3 className="text-4xl font-medium  mb-2">SDKs</h3>
              <p className="text-gray-600 mb-4">
              Try our SDKs to streamline the integration experience.
              </p>
              <ul className=" font-bold text-blue-500 ">
                <li className="pb-3">PayPal Checkout</li>
                <li className="pb-3">JavaScript SDK</li>

                <li className="pb-3">Braintree SDKs</li>
              </ul>
              </div>
                </div>
              </div>
              
            </div>

            <div className=" rounded-lg  mx-3 max-w-[85%] justify-center  "  >
              <div className='mx-3 max-w-full'>
                <div className='my-4 bg-white'>
                    <div className='logoarea h-[116px] bg-[#d5f4ee] flex flex-col justify-between '>
                    <div className='flex flex-col justify-center h-full'>
                             <div className='flex flex-row justify-center w-full'>
                             <img className=''  src='.\src\assets\image3.jpg'/>
                                </div>
                                </div>
                        
                    </div>
                <div className='textarea py-[16px] px-[24px]'>
              <h3 className="text-4xl font-medium  mb-2">Event Notifications</h3>
              <p className="text-gray-600 mb-4">
              Stay informed of API transaction events with our notification tools.
              </p>
              <ul className=" font-bold text-blue-500 ">
                <li className="pb-3">Webhooks</li>
                <li className="pb-3">Instant Payment Notification (IPN)</li>

                <li className="pb-3">Payment Data Transfer (PDT)</li>
              </ul>
              </div>
                </div>
              </div>
              
            </div>
           
          </div>
        </div>
      </section>
  )
}

export default Apisection