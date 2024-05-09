/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  Key,
} from "react";

async function getAll() {
  try {
    const res = await axios.get("http://localhost:4000/data");
    return res?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const AllCountry = async () => {
  const datas = await getAll();
  console.log(datas);
  return (
    <div className="flex justify-between sm:justify-center flex-wrap gap-5 mt-[50px]">
      {datas?.map(
        (
          data: {
            population: ReactNode;
            capital: ReactNode;
            id: any;
            flags: (string | undefined)[];
            name: {
              common:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined;
            };
            region:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<AwaitedReactNode>
              | null
              | undefined;
          },
          index: Key | null | undefined
        ): any => (
          <Link href={`/contries/${data.id}`} key={index}>
            <div className="flex rounded-md border duration-300 border-spacing-2 overflow-hidden  hover:shadow-2xl  flex-col w-[300px] h-[400px] ">
              <img
                src={data?.flags.png}
                alt={data?.name?.common ?? ""}
                className="w-[300px] h-[180px]"
              />
              <div className="flex  p-8 flex-col">
                <h1 className="flex from-sky-400 font-black">
                  {data?.name?.common}
                </h1>

                <div className="flex flex-col gap-3  mt-4">
                  <p className="text-[16px] flex  items-center gap-4 font-bold">
                    Population:
                    <span className="text-[14px] font-semibold">
                      {data?.population}
                    </span>
                  </p>
                  <p className="text-[16px] flex  items-center gap-4 font-bold">
                    Region:
                    <span className="text-[14px] font-semibold">
                      {data?.region}
                    </span>
                  </p>
                  <p className="text-[16px] flex  items-center gap-4 font-bold">
                    Capital:
                    <span className="text-[14px] font-semibold">
                      {data?.capital}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export async function getStaticProps() {
  // Fetch data at build time
  const countries = await getAll(); // Fetch data using the getAll function
  return {
    props: {
      countries, // Pass countries as props
    },
    revalidate: 3600, // Revalidate data every hour (optional)
  };
}

export default AllCountry;
