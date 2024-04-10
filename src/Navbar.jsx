import React from "react";

const Navbar = () => {
  return (
    <div className="fixed bg-white w-full">
      <header className=" bg-white-500 py-4 ">
        <div className=" flex justify-between  items-center px-4 w-full">
          {/* left side of navbar */}
          <div className="flex pl-5">
            {/* here moblie navbar  */}
            <div className="flex justify-center items-center">
              <svg
                className=" w-5 mr-7  lg:hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#09398b"
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
              </svg>
              <h4 className=" lg:hidden font-semibold text-blue-400 hover:underline text-xl">
                PayPal Docs
              </h4>
            </div>
            {/* logo paypal */}
            <img
              className="h-8 hidden lg:block"
              src="https://www.paypalobjects.com/webstatic/developer/logo2_paypal_developer_2x.png"
              alt="Logo"
            />
            <button
              type="text"
              className="hidden lg:block border-2 border-blue-800 rounded-2xl w-15 ml-6 "
            >
              <div className="flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 ml-2 mt-0.5"
                  >
                    <path
                      fill="#093a83"
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                    />
                  </svg>{" "}
                </span>
                <span className="text-blue-800 font-bold  ml-2">Search </span>
              </div>
            </button>
          </div>
          <div className="hidden lg:flex justify-center items-center ">
            <nav>
              <ul className="flex space-x-2  ">
                <li>
                  <a
                    href=""
                    to="payment"
                    className=" text-black font-bold px-3 py-2 rounded-md"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    to="api"
                    className="text-black font-bold px-3 py-2 rounded-md "
                  >
                    APIs & SDKs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black font-bold px-3 py-2 rounded-md "
                  >
                    Tolls
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-black font-bold px-3 py-2 rounded-md "
                  >
                    Support
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <button
                className=" hidden lg:block border border-blue-800  bg-blue-800 text-white
     py-2 px-5 rounded-3xl font-semibold"
              >
                Login to DashBoard
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
