import React, { useEffect, useState, useCallback } from "react";

export const Covercarosel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [activeTab, setActiveTab] = useState(1);

  const sliderImages = [
    "https://i.ibb.co/GQ1TnkJ/1.png",
    "https://i.ibb.co/txBfZhz/2.png",
    "https://i.ibb.co/LC94KpD/3.png",
    " https://i.ibb.co/MCYgNLw/4.png",
    "https://i.ibb.co/sW9BWy4/5.png",
  ];
  //   https://i.ibb.co/MCYgNLw/4.png
  // https://i.ibb.co/sW9BWy4/5.png
  // https://i.ibb.co/GQ1TnkJ/1.png
  // https://i.ibb.co/txBfZhz/2.png
  // https://i.ibb.co/LC94KpD/3.png

  const handleTabChange = (index) => {
    setActiveTab(index);
    setCurrentSlider(index - 1);
  };

  const prevSlider = () => {
    setCurrentSlider((prevSlider) =>
      prevSlider === 0 ? sliderImages.length - 1 : prevSlider - 1
    );
  };

  const nextSlider = useCallback(() => {
    setCurrentSlider((prevSlider) =>
      prevSlider === sliderImages.length - 1 ? 0 : prevSlider + 1
    );
  }, [sliderImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider, currentSlider]);

  return (
    <div>
      {/* --------tabs-------- */}
      <div role="tablist" className="tabs  tabs-bordered">
        {sliderImages.map((_, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label={
                index === 0
                  ? "Study"
                  : index === 1
                  ? "Quiz"
                  : index === 2
                  ? "Test"
                  : index === 3
                  ? "Game"
                  : "Other"
              }
              checked={activeTab === index + 1}
              onChange={() => handleTabChange(index + 1)}
            />
            {/* <div role="tabpanel" className="tab-content p-10">
              Tab content {index + 1}
            </div> */}
          </React.Fragment>
        ))}
      </div>

      <div className="grid justify-center ">
        {/* arrow left */}

        <div className="w-full max-w-96 overflow-hidden">
          {/* slider container */}
          <div
            className="flex transform-gpu duration-500 ease-linear"
            style={{ transform: `translateX(-${currentSlider * 100}%)` }}
          >
            {/* sliders */}
            {sliderImages.map((slide, inx) => (
              <img
                width={800}
                height={700}
                key={inx}
                src={slide}
                className="mx-[2.5%] h-full min-w-[95%] rounded-2xl border-8 border-transparent object-cover"
                alt={`Slider - ${inx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* ----------------button------------ */}
        <div className="flex text-blue-500 font-bold text-xl  mt-4 justify-between ">
          {/* ----------left button------- */}
          <button
            onClick={prevSlider}
            className=" top-1/2 flex text-white items-center h-6 w-6 text-center bg-gradient-to-b from-blue-900 to-blue-500  rounded-full   md:h-8 md:w-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="icon h-4 w-4 md:h-6 md:w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* --------count ---------- */}
          <h2 className="text-2xl">
            {" "}
            0{currentSlider + 1}/{sliderImages.length}
          </h2>{" "}
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className=" top-1/2 flex text-white items-center h-6 w-6 text-center bg-gradient-to-b from-blue-900 to-blue-500  rounded-full   md:h-8 md:w-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="icon h-4 w-4 md:h-6 md:w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
