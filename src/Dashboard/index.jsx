import React from "react";
import Bg_Image from "../assets/Dashboard_bg1.jpg";
import { useNavigate } from "react-router";

function Index() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${Bg_Image}')`,
      }}
    >
      <div className="text-center text-white pt-10">
        <h3 className="text-gray-200 md:text-7xl text-5xl px-4 mt-5 font-extrabold drop-shadow-lg tracking-wide animate-fadeIn">
          React Project
        </h3>

        <div className="flex flex-col justify-center items-center gap-4 pt-20 animate-slideUp">
          <button
            type="button"
            className="p-4 w-56 border border-transparent rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => navigate("/task1")}
          >
            <span className="text-lg font-bold">Task 1</span>
          </button>
          <button
            type="button"
            className="p-4 w-56 border border-transparent rounded-full text-white bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => navigate("/task2")}
          >
            <span className="text-lg font-bold">Task 2</span>
          </button>
        </div>

        <div className="flex gap-4 justify-center items-center mt-14 md:mt-40">
          <div className="flex gap-2 items-center">
            <h1 className="text-gray-300">Vercel</h1>
            <a href="https://my-portfolio-puxr.vercel.app/" target="_blank" rel="noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3616/3616770.png"
                width={30}
                className="hover:scale-110 transition-transform duration-200"
                alt="Vercel"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
