import express from "../../public/express-logo.png";
import reactjs from "../../public/reactjs.png";
import database from "../../public/database-logo.jpg";
import js from "../../public/js.png";
import c from "../../public/c-logo.png";
import html from "../../public/html.png";
import nodejs from "../../public/images.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: express,
    },
    {
      id: 2,
      logo: reactjs,
    },
    {
      id: 3,
      logo: database,
    },
    {
      id: 4,
      logo: js,
    },
    {
      id: 5,
      logo: c,
    },
    {
      id: 6,
      logo: html,
    },
    {
      id: 7,
      logo: nodejs,
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p>I've more than 2 years of experience in below technologies.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className=""></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
