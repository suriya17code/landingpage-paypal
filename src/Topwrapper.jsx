import React from "react";

const Topwrapper = () => {
  return (
    <div  className="max-w-[72rem] mt-[3rem] mx-auto flex m-5 bg-gray-100 rounded-3xl pl-5 pt-4 items-center"  >
      <div className="checkoutWrapper  justify-center mb-4 lg:flex items-center" >
      <span className="flex items-center border border-purple-400 w-13 justify-center mr-5 mb-3 lg:mb-0 bg-purple-400 rounded-lg ">
    <span className="inline-block mr-1 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
            <path fill-rule="evenodd" d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm.75-15.235v6.25a.75.75 0 0 1-.378.652l-4.349 2.481a.75.75 0 1 1-.743-1.302l3.97-2.266V5.765a.75.75 0 0 1 1.5 0z" clip-rule="evenodd">
            </path>
        </svg>
    </span>
    <span class="inline-block">New</span>
</span>

        <p
          className="badgeInfo newia-badge  flex"
          
        >
          Get pre-built checkout code with our
          <a
            href="/integration-builder"
            pa-marked="1"
            className=" text-blue-500 hover:underline ml-2"
          >
            Integration Builder
          </a>
          
        </p>
      </div>
    </div>
  );
};

export default Topwrapper;
