/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
type Props = {
  revalidate: number;
};

async function getCountry(id: string) {
  try {
    const res = await axios.get(`http://localhost:4000/data/${id}`);
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error("Unexpected response from server");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

const DetailsPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const data = await getCountry(params.id);
  return (
    <div className="flex container flex-col mt-[100px]  justify-center">
      <div className="flex">
        <Link
          href="/contries"
          className="flex justify-center items-center rounded  h-[46px] w-[60px] bg-slate-600 text-white"
        >
          <IoArrowBack size={42} />
        </Link>
        <h1 className="text-[42px] text mx-auto font-bold mb-[12px]">
          {" "}
          Details of {data.name.common} Country
        </h1>
      </div>
      <div className=" flex gap-8 rounded-md overflow-hidden mx-auto items-center w-[800px] mt-9  border ">
        <img
          src={data.flags.png}
          alt="this is flag of country"
          className="w-[500px] h-[400px]"
        />
        <div className={`flex flex-col `}>
          <h1 className="text-xl font-bold mb-[12px]">{data.name.common}</h1>
          <p className="text-[16px] flex  items-center gap-4 font-bold">
            Population:
            <span className="text-[14px] font-semibold"> {data.population}</span>
          </p>
          <p className="text-[16px] flex  items-center gap-4 font-bold">
            Capital:<span className="text-[14px] font-semibold"> {data.capital}</span>
          </p>
          <p className="text-[16px] flex  items-center gap-4 font-bold">
            Region:<span className="text-[14px] font-semibold">{data.region}</span>{" "}
          </p>
          <p className="text-[16px] flex  items-center gap-4 font-bold">
            Area:<span className="text-[14px] font-semibold">{data.area}</span>{" "}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
