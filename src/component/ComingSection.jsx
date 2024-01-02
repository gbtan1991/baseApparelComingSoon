import React from "react";

const ComingSection = () => {
  return (
    <div>
      <header>
        <div className="w-full h-20 p-8 "> 
          <img src="/logo.svg" alt="compnay logo" className="h-6" />
        </div>
        
        <div>
          <img src="/hero-mobile.jpg" alt="girl with yellow shirt mobile" />
        </div>

        <div className="p-6">
          <h3 className="font-theme text-5xl text-center">WERE COMING SOON</h3>
          <p className="font-theme text-center">
          Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.

          </p>
          </div>

          <div className="flex justify-between m-6 rounded-full border border-softRed">

          <input type="email" placeholder="Email Address" className="w-full p-4" />
          <button className="w-full p-4 bg-softRed text-white"></button>
          </div>


      </header>
    </div>
  );
};

export default ComingSection;
