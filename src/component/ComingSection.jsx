import React, { useState } from "react";

const ComingSection = () => {
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    const emailRegex = /^([^@]*@[^@]*){1}$/

    if (!email || !emailRegex.test(email)) {
      setShowError(true);
    }
    
    else {
      console.log("Email submitted", email);
      setEmail("");
      setShowError(false);
    }
  };

  return (
    <div className="flex justify-between overflow-auto md:bg-pattern md:bg-cover md:bg-center">
      <div className="w-screen md:w-[50%] h-screen bg-gradient-to-b from-lightGradient1 to-lightGradient2 md:from-transparent md:to-transparent ">
        <div className="flex flex-col md:m-10 md:p-10 xl:m-20 xl:p-20 3xl:m-28 3xl:p-28 ">
          {/* LOGO SECTION */}
          <header className="w-full flex flex-col items-center ">
            <div className="w-full p-8 ">
              <img src="/logo.svg" alt="compnay logo" className="h-5 md:h-6" />
            </div>
          </header>
          {/* MOBILE HERO SECTION */}
          <div className="bg-contain xs:bg-cover bg-no-repeat bg-mobile md:hidden">
            <div className="h-[165px] xxs:h-[250px] w-screen"></div>
          </div>

          {/* CONTENT SECTION */}
          <div className="xs:mt-4 p-8 ">
            <h3 className="font-theme font-semibold tracking-widest text-darkGrayisRed  text-4xl/10 text-center md:text-5xl/none md:text-left">
              <span className="font-light text-desaturadedRed tracking-widest">
                WE'RE
              </span>{" "}
              COMING SOON
            </h3>
            <p className="mt-3 font-theme text-sm text-desaturadedRed text-center md:text-left md:text-base ">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </div>

          {/* EMAIL SECTION */}
          <div className="px-8 ">
        <div className="flex justify-between rounded-full border border-redGradient1 h-10 w-1/8 ">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email} // Reflect the state of the email variable
            onChange={handleInputChange} // Handle input changes
            className="px-6 placeholder-redGradient1 text-sm font-theme bg-transparent "
          />
          <div className="flex items-center  flex-row gap-3">
            {showError && <img src="/icon-error.svg" className="w-5 h-5" />}
            <button
              className="h-10 w-12 bg-gradient-to-r from-redGradient1 to-redGradient2 rounded-full shadow-lg shadow-redGradient1 cursor-pointer center grid place-content-center"
              onClick={handleSubmit}
            >
              <img src="/icon-arrow.svg" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {showError && (
          <p className="text-xs py-2 px-10 text-red-500">
            Please provide a valid email
          </p>
        )}
      </div>
    </div>
      </div>

      {/* DESKTOP HERO SECTION */}
      <div className="bg-desktop bg-no-repeat bg-right bg-cover hidden md:block 2xl:bg-contain h-screen w-[50%]"></div>
    </div>
  );
};

export default ComingSection;
