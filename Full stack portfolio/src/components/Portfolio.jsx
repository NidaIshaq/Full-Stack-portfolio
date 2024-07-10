import React from "react";

function PortFolio() {
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
          <div className="mb-3 md:w-[270px] md:h-[390px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
            <img
              src="\Screenshot 2024-05-15 171351.png"
              className="w-full h-[120px] p-1 border-[2px] justify-items-center"
              alt="Hospital Management System"
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2 size-15">
                Hospital Management System
              </div>
              <p className="px-2 text-wrap text-gray-700">
                The Hospital Management System is built with Express.js, React.js, and PostgreSQL, designed to enhance patient experiences.
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 justify-around">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/NidaIshaq/project-hospital")
                }
              >
                Source code
              </button>
            </div>
          </div>
          <div className="mb-3 md:w-[270px] md:h-[390px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
            <img
              src="\Screenshot 2024-07-06 184015.png"
              className="w-full h-[120px] p-1 border-[2px] justify-items-center"
              alt="Pet Care"
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2 size-15">
                Pet Care (full stack)
              </div>
              <p className="px-2 text-wrap text-gray-700">
                This project is an easy-to-use interface for managing veterinary appointments, searching for disease information, and accessing tailored dietary plans for pets.
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 justify-around">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                onClick={() =>
                  (window.location.href = "https://github.com/NidaIshaq/work-task")
                }
              >
                Source code
              </button>
            </div>
          </div>
          <div className="mb-3 md:w-[270px] md:h-[390px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
            <img
              src="\Screenshot 2024-05-24 143802.png"
              className="w-full h-[120px] p-1 border-[2px] justify-items-center"
              alt="Skill Up"
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2 size-15">
                Skill Up
              </div>
              <p className="px-2 text-wrap text-gray-700">
                The Skill Up is built with Express.js, React.js with Redux, and PostgreSQL. It is a modern online learning environment designed to empower individuals.
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 justify-around">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/NidaIshaq/https---github.com-NidaIshaq-Skill-Up-project")
                }
              >
                Source code
              </button>
            </div>
          </div>
          <div className="mb-3 md:w-[270px] md:h-[390px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
            <img
              src="\Screenshot 2024-06-06 164728.png"
              className="w-full h-[120px] p-1 border-[2px] justify-items-center"
              alt="Interactive Movie and Drama Search Engine"
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2 size-15">
                Interactive Movie and Drama Search Engine
              </div>
              <p className="px-2 text-wrap text-gray-700">
                Developed user-friendly web application using HTML, CSS, and JavaScript to enable convenient search for movies and dramas by title.
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 justify-around">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/NidaIshaq/portfolio_html_css_js")
                }
              >
                Source code
              </button>
            </div>
          </div>
          <div className="mb-3 md:w-[270px] md:h-[390px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
            <img
              src="\hotel.png"
              className="w-full h-[120px] p-1 border-[2px] justify-items-center"
              alt="Hostel Explorer"
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2 size-15">
                Hostel Explorer
              </div>
              <p className="px-2 text-wrap text-gray-700">
                Hostel Explorer is a web and mobile application targeting people who tend to live in hostels for educational or other purposes.
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 justify-around">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/NidaIshaq/Hostel-Explorer/blob/main/README.md")
                }
              >
                Source code
              </button>
            </div>
          </div>
          <div className="mb-3 md:w-[270px] md:h-[390px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
            <img
              src="\pub.png"
              className="w-full h-[120px] p-1 border-[2px] justify-items-center"
              alt="InSightInk"
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2 size-15">
                InSightInk
              </div>
              <p className="px-2 text-wrap text-gray-700">
                InsightInk is a responsive web application, designed with a minimalist aesthetic, serves as a freelance publishing platform connecting authors and publishers.
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 justify-around">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/NidaIshaq/publishers/blob/main/README.md")
                }
              >
                Source code
              </button>
            </div>
          </div>
          <div className="mb-3 md:w-[270px] md:h-[390px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
            <img
              src="\Screenshot 2024-06-06 173750.png"
              className="w-full h-[120px] p-1 border-[2px] justify-items-center"
              alt="Tic Tac Toe"
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2 size-15">
                Tic Tac Toe
              </div>
              <p className="px-2 text-wrap text-gray-700">
                Created an interactive Tic Tac Toe game using HTML, CSS, and JavaScript, featuring responsive design and both single-player and two-player modes.
              </p>
            </div>
            <div className="px-6 py-4 space-x-3 justify-around">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/NidaIshaq/https---github.com-NidaIshaq-Tic-Tac-Toe")
                }
              >
                Source code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
