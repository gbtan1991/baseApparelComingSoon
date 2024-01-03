import React from "react";


const ComingSection = () => {

  

  return (
    <div>
      <header className="w-screen h-2 flex flex-col items-center">
        <div className="w-full p-6 "> 
          <img src="/logo.svg" alt="compnay logo" className="h-5 grow" />
        </div>
        
        <div className="w-full bg-contain bg-no-repeat bg-mobile" >
          <div className="h-[250px]">
          
          </div>
          
        </div>

        <div className="mt-4 p-8">
          
          <h3 className="font-theme font-semibold tracking-widest  text-4xl/10 text-center">
            <span className="font-light text-desaturadedRed">WE'RE</span> COMING SOON</h3>
          <p className="mt-3 font-theme text-sm text-desaturadedRed text-center">
          Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.

          </p>
          </div>

          <div className="flex justify-between  rounded-full border w-4/5  border-redGradient1">
          
          <input type="email" placeholder="Email Address" className="px-6 rounded-full placeholder-redGradient1 text-sm font-theme" />
          <button className="px-7 py-3 bg-gradient-to-r from-redGradient1 to-redGradient2 rounded-full"><img src="/icon-arrow.svg" /></button>          </div>


      </header>
    </div>
  );
};

export default ComingSection;
