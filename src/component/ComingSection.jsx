import React, { useState } from "react";

const ComingSection = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true)

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setIsValidEmail(emailRegex.test(newEmail));

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isValidEmail) {
      
    }
  }


  return (
    <div className="bg-gradient-to-b from-lightGradient1 to-lightGradient2 h-screen">
      {/* LOGO SECTION */}
      <header className="w-full h-2 flex flex-col items-center">
        <div className="w-full p-6 ">
          <img src="/logo.svg" alt="compnay logo" className="h-5 grow" />
        </div>

        <div className="bg-contain xs:bg-cover bg-no-repeat bg-mobile">
          {/* HERO SECTION */}
          <div className="h-[250px] w-screen "></div>
        </div>

        {/* CONTENT SECTION */}
        <div className="mt-4 p-8">
          <h3 className="font-theme font-semibold tracking-widest  text-4xl/10 text-center">
            <span className="font-light text-desaturadedRed tracking-widest">
              WE'RE
            </span>{" "}
            COMING SOON
          </h3>
          <p className="mt-3 font-theme text-sm text-desaturadedRed text-center">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>

        {/* EMAIL SECTION */}
        <div>
        <form className="flex justify-between mx-4 rounded-full border border-redGradient1 h-10 w-fit ">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="px-6 placeholder-redGradient1 text-sm font-theme bg-transparent"
          />
          <div className="flex items-center gap-3">
            <img src="/icon-error.svg" className="w-5 h-5" />
            <button
              for="email"
              className=" h-10 px-6 py-3 bg-gradient-to-r from-redGradient1 to-redGradient2 rounded-full shadow-lg shadow-redGradient1 cursor-pointer"
            >
              <img src="/icon-arrow.svg" className="min-h-5" />
            </button>
          </div>
        </form>

        <p className="text-xs py-2 px-10 text-red-500">Please provide a valid email</p>
        </div>
      </header>
    </div>
  );
};

export default ComingSection;
