import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const [davlat, setDavlat] = useState({});
  const { name } = useParams();
  useEffect(() => {
    getDavlat();
  }, []);
  const getDavlat = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await res.json();
    if (res.status === 200) {
      setDavlat(data);
    }
  };

  // console.log(davlat);

  return (
    <div className="py-[48px] bg-[#f2f2f2] dark:bg-[#202C36]">
      <div className="container mx-auto">
        <Link
          className="mb-[80px] w-[140px] rounded-[7px] flex items-center px-[32px] py-[10px] gap-3 bg-white dark:bg-[#2B3844]"
          to="/"
        >
          <FaArrowLeft className="dark:text-white"></FaArrowLeft>
          <h1 className=" font-light text-[16px] leading-5 dark:text-white">
            Back
          </h1>
        </Link>
        {davlat.length > 0 && (
          <div className="grid gap-10 items-center md:flex md:gap-[120px] justify-items-center">
            <img
              className="w-[260px] h-[285px] md:w-[460px] md:h-[385px] lg:w-[560px] lg:h-[485px] bg-white"
              src={davlat[0].flags.png}
              alt="Bayrog'"
              width="560"
              height="485"
            />
            <div>
              <h1 className="mb-[23px] font-extrabold text-[32px] leading-[44px] text-[#111517] dark:text-white">
                {davlat[0].name.common}
              </h1>
              <div className="  md:flex md:justify-between md:gap-[100px] lg:gap-[140px]">
                <div>
                  <div className="text-[#111517] dark:text-white">
                    <span className="mb-4 font-semibold text-[16px] leading-8 text-[#111517] dark:text-white">
                      Population:
                    </span>
                    {davlat[0].population}
                  </div>
                  <div className="text-[#111517] dark:text-white">
                    <span className="mb-4 font-semibold text-[16px] leading-8 text-[#111517] dark:text-white">
                      Region:
                    </span>
                    {davlat[0].region}
                  </div>
                  <div className="text-[#111517] dark:text-white">
                    <span className="mb-4 font-semibold text-[16px] leading-8 text-[#111517] dark:text-white">
                      Sub Region:
                    </span>
                    {davlat[0].subregion}
                  </div>
                  <div className="text-[#111517] dark:text-white">
                    <span className="font-semibold text-[16px] leading-8 text-[#111517] dark:text-white">
                      Capital:
                    </span>
                    {davlat[0].capital}
                  </div>
                </div>
                <div>
                  <div className="text-[#111517] dark:text-white">
                    <span className="mb-4 font-semibold text-[16px] leading-8 text-[#111517] dark:text-white">
                      Top Level Domain:
                    </span>
                    {davlat[0].tld}
                  </div>
                  <div className="text-[#111517] dark:text-white">
                    <span className="mb-4 font-semibold text-[16px] leading-8 text-[#111517] dark:text-white">
                      Currencies:
                    </span>
                    {davlat[0].currencies.symbol}
                  </div>
                  <div className="text-[#111517] dark:text-white">
                    <span className="font-semibold text-[16px] leading-8 text-[#111517] dark:text-white">
                      Languages:
                    </span>
                    {davlat[0].languages[0]}
                  </div>
                </div>
              </div>

              {davlat[0].borders && (
                <div className="flex gap-5 items-center mt-[68px] text-[#111517] dark:text-white">
                  Border Countries:
                  {davlat[0].borders.map((d, index) => (
                    <div key={index}>
                      <span className=" cursor-pointer py-[5px] px-[20px] bg-white shadow-[0px_0px_4px_1px_rgba(0,0,0,0.104931)] rounded dark:bg-[#2B3844]">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
