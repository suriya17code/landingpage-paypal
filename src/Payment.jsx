import React from "react";

const Payment = () => {
  return (
    <section className="mainInfo   ">
     <div className="max-w-[72rem] items-center flex  justify-center  px-5 mx-auto">
   <div className="lg:flex md:flex justify-center items-center ">
{/* left */}
<div className=" md:max-w-[60%] lg:max-w-[60%] ">
    <h3 className="text-5xl font-semibold "> Accept Payments</h3>

    <div className="lg:flex  lg:flex-wrap md:flex md:flex-wrap mb-5">
<div className="mt-6 px-3 lg:max-w-[50%] md:max-w-[50%] ">
    <div className=" icons flex flex-row justify-start">
        <div>
        <img className="pt-1" width="34" height="24" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/228BE6/external-monitor-interface-kiranshastry-solid-kiranshastry.png" alt="external-monitor-interface-kiranshastry-solid-kiranshastry"/> </div>
        <div>
            <h4 className="hover:underline text-3xl ml-3 text-wrap"> Online</h4>
        </div>
    </div>
    <p className="text-gray-600 lg:max-w-[80%] font-semibold  text-lg py-5">Build a scalable checkout solution for web 
        and mobile with our REST APIs and JavaScript SDK</p>
        <a className="flex items-center text-blue-500 font-bold text-lg hover:underline">Checkout</a>
        <a className="flex items-center text-blue-500 font-bold text-lg hover:underline">Subscriptions</a>
        <a className="flex items-center text-blue-500 font-bold text-lg hover:underline">Invoicing</a>
        <a className="flex items-center text-blue-500 font-bold text-lg hover:underline">Donate</a>
</div>

<div className="mt-6 px-3 lg:max-w-[50%] md:max-w-[50%] ">
    <div className=" icons flex flex-row justify-start">
        <div>
        <img className="pt-3" width="25" height="25" src="https://img.icons8.com/ios-filled/50/228BE6/bank-cards--v1.png" alt="bank-cards--v1"/>
        </div>
        <div>
            <h4 className="hover:underline text-3xl ml-3 text-wrap"> In-Person</h4>
        </div>
    </div>
    <p className="text-gray-600 lg:max-w-[80%] font-semibold text-lg py-5">Set up a ready-made point-of-sale solution or integrate a payment solution to your service</p>
        <a className="flex items-center text-blue-500 font-bold text-lg hover:underline">Point of Sale Solutions</a>

</div>

<div className="mt-6 px-3 lg:max-w-[50%] md:max-w-[50%] ">
    <div className=" icons flex flex-row justify-start">
        <div>
        <img className="pt-2" width="26" height="20" src="https://img.icons8.com/ios-filled/50/228BE6/bank-card-back-side.png" alt="bank-card-back-side"/>
</div>
        <div>
         <h4 className="hover:underline text-3xl ml-3 text-wrap"> Multiparty</h4>
        </div>
    </div>
    <p className="text-gray-600 lg:max-w-[80%] font-semibold text-lg py-5">Create an onboarding and payments solution for your marketplace or payments platform</p>
        <a className="flex items-center text-blue-500 font-bold text-lg hover:underline">Build a Marketplace</a>
   </div>

<div className="mt-6 px-3 lg:max-w-[50%] md:max-w-[50%] ">
    <div className=" icons flex flex-row justify-start">
        <div>
        <img className="pt-2" width="26" height="26" src="https://img.icons8.com/metro/26/228BE6/shop.png" alt="shop"/>  </div>
        <div>
            <h4 className="hover:underline text-3xl ml-3 text-wrap"> 3rd-Party</h4>
        </div>
    </div>
    <p className="text-gray-600 lg:max-w-[80%] font-semibold text-lg py-5">Integrate PayPal with a 3rd-party shopping cart or plugin</p>
        <a className="flex items-center text-blue-500 font-bold text-lg hover:underline">Partners</a>
        <a className="flex items-center text-blue-500 font-bold text-lg hover:underline">Plugins</a>
</div>
    </div>
</div>
{/* right */}
<div className=" lg:max-w-[33%]  md:max-w-[33%] hidden md:flex lg:flex ">
   <div className=" ">
    <img className="lg:max-w-[73%] rounded-2xl" src=".\src\assets\maincontent.png" alt="image"/>
    </div>
</div>
     </div>
     </div>          
    </section>
  );
};

export default Payment;
