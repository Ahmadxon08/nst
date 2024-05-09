/* eslint-disable @next/next/no-img-element */

import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import AllCountry from ".";
const germany = "./germany.png";

const Contries = async () => {
  return (
    <div>
      <div className="container mx-auto mt-[100px] flex flex-col">
        <div className="flex lg:justify-between md:justify-between  items-center">
          <div className="flex rounded-md  items-center w-[450px] px-3 gap-2 h-[56px] border-solid border-2  border-gray-300">
            <label htmlFor="search">
              <IoSearchSharp
                color="gray"
                size={26}
                className="cursor-pointer"
              />
            </label>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              className=" h-full rounded-xl w-full outline-none"
            />
          </div>
          <select
            name="filter"
            id="filter"
            className="flex py-1 outline-none font-bold px-3 text-xl h-[56px] w-[200px] rounded-md  border-2 border-gray-300 "
          >
            <option value="all">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="america">America</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
        <AllCountry />

        {/* <div className="lg:grid  grid-cols-4 gap-6 lg:grid-cols-4 sm:grid-cols-1 sm:justify-center justify-between flex-wrap mt-9 ">
          <div className="flex flex-col w-[264px] hover:shadow-gray-500 shadow-2xl duration-500 cursor-pointer rounded-md h-[336px] border-2 border-gray-300">
            <img src={germany} alt="this is germanys' flag" />
            <div className="flex flex-col p-[16px]  jutify-center">
              <h1 className="text-center text-3xl">1</h1>
              <h1 className="text-xl font-bold mb-[12px]">Germany</h1>
              <p className="text-gray-600">Population: Berlin</p>
              <p className="text-gray-600">Capital: Berlin</p>
              <p className="text-gray-600">Region: Europe</p>
            </div>
          </div>
          <div className="flex flex-col w-[264px] hover:shadow-gray-500 shadow-2xl duration-500 cursor-pointer rounded-md h-[336px] border-2 border-gray-300">
            <img src={germany} alt="this is germanys' flag" />
            <div className="flex flex-col p-[16px]  jutify-center">
              <h1 className="text-center text-3xl">2</h1>
              <h1 className="text-xl font-bold mb-[12px]">Germany</h1>
              <p className="text-gray-600">Population: Berlin</p>
              <p className="text-gray-600">Capital: Berlin</p>
              <p className="text-gray-600">Region: Europe</p>
            </div>
          </div>
          <div className="flex flex-col w-[264px] hover:shadow-gray-500 shadow-2xl duration-500 cursor-pointer rounded-md h-[336px] border-2 border-gray-300">
            <img src={germany} alt="this is germanys' flag" />
            <div className="flex flex-col p-[16px]  jutify-center">
              <h1 className="text-center text-3xl">3</h1>
              <h1 className="text-xl font-bold mb-[12px]">Germany</h1>
              <p className="text-gray-600">Population: Berlin</p>
              <p className="text-gray-600">Capital: Berlin</p>
              <p className="text-gray-600">Region: Europe</p>
            </div>
          </div>
          <div className="flex flex-col w-[264px] hover:shadow-gray-500 shadow-2xl duration-500 cursor-pointer rounded-md h-[336px] border-2 border-gray-300">
            <img src={germany} alt="this is germanys' flag" />
            <div className="flex flex-col p-[16px]  jutify-center">
              <h1 className="text-center text-3xl">4</h1>
              <h1 className="text-xl font-bold mb-[12px]">Germany</h1>
              <p className="text-gray-600">Population: Berlin</p>
              <p className="text-gray-600">Capital: Berlin</p>
              <p className="text-gray-600">Region: Europe</p>
            </div>
          </div>
          <div className="flex flex-col w-[264px] hover:shadow-gray-500 shadow-2xl duration-500 cursor-pointer rounded-md h-[336px] border-2 border-gray-300">
            <img src={germany} alt="this is germanys' flag" />
            <div className="flex flex-col p-[16px]  jutify-center">
              <h1 className="text-center text-3xl">5</h1>
              <h1 className="text-xl font-bold mb-[12px]">Germany</h1>
              <p className="text-gray-600">Population: Berlin</p>
              <p className="text-gray-600">Capital: Berlin</p>
              <p className="text-gray-600">Region: Europe</p>
            </div>
          </div>
          <div className="flex flex-col w-[264px] hover:shadow-gray-500 shadow-2xl duration-500 cursor-pointer rounded-md h-[336px] border-2 border-gray-300">
            <img src={germany} alt="this is germanys' flag" />
            <div className="flex flex-col p-[16px]  jutify-center">
              <h1 className="text-center text-3xl">6</h1>
              <h1 className="text-xl font-bold mb-[12px]">Germany</h1>
              <p className="text-gray-600">Population: Berlin</p>
              <p className="text-gray-600">Capital: Berlin</p>
              <p className="text-gray-600">Region: Europe</p>
            </div>
          </div>
          <div className="flex flex-col w-[264px] hover:shadow-gray-500 shadow-2xl duration-500 cursor-pointer rounded-md h-[336px] border-2 border-gray-300">
            <img src={germany} alt="this is germanys' flag" />
            <div className="flex flex-col p-[16px]  jutify-center">
              <h1 className="text-center text-3xl">7</h1>
              <h1 className="text-xl font-bold mb-[12px]">Germany</h1>
              <p className="text-gray-600">Population: Berlin</p>
              <p className="text-gray-600">Capital: Berlin</p>
              <p className="text-gray-600">Region: Europe</p>
            </div>
          </div>
          <div className="flex flex-col w-[264px] hover:shadow-gray-500 shadow-2xl duration-500 cursor-pointer rounded-md h-[336px] border-2 border-gray-300">
            <img src={germany} alt="this is germanys' flag" />
            <div className="flex flex-col p-[16px]  jutify-center">
              <h1 className="text-center text-3xl">8</h1>
              <h1 className="text-xl font-bold mb-[12px]">Germany</h1>
              <p className="text-gray-600">Population: Berlin</p>
              <p className="text-gray-600">Capital: Berlin</p>
              <p className="text-gray-600">Region: Europe</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contries;
