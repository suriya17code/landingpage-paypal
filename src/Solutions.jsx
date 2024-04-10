import React from 'react'

const Solutions = () => {
  return (
    <section className="container  mx-auto py-14 px-4">
        <h1 className='text-extrabold text-5xl mb-7'>Additional Solutions</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-start  mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-7 h-7"
          >
            <path
              fill="#197cc8"
              d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"
            />
          </svg>
          <h3 className=" pl-3  font-semibold text-3xl mb-2">Disputes</h3>
        </div>
        <p className="text-gray-500 text-lg  font-semibold">
        Automate your dispute management, from initial claim to final resolution
        </p>
        <p className="pt-5 font-bold text-lg  text-blue-600 ">Get Started</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-start  mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-7 h-7"
          >
            <path
              fill="#1676c0"
              d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
            />
          </svg>

          <h3 className="pl-3  font-semibold text-3xl mb-2">Reporting</h3>
        </div>
        <p className="text-gray-500 text-lg  font-semibold">
        Get transaction-level insights to help manage your day-to-day operations
        </p>
        <p className="pt-5 font-bold text-lg  text-blue-600 ">Get Started</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-start  mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="w-7 h-7"
          >
            <path
              fill="#1676c0"
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
            />
          </svg>
          <h3 className="pl-3  text-center  font-semibold text-3xl mb-2">
          Identity
          </h3>
        </div>
        <p className="text-gray-500 text-lg  font-semibold">
        Let your customers log in to your website using their PayPal credentials
        </p>{" "}
        <p className="pt-5 font-bold text-lg  text-blue-600 ">Get Started</p>
      </div>
    </div>
  </section>

  )
}

export default Solutions