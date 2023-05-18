import React from "react";
import { useEffect } from "react";

const RegionFiltr = ({ setCountrys, getData }) => {
  const handleRegion = (e) => {
    getRegion(e.target.value);
  };
  useEffect(() => {
    getRegion();
  }, []);
  const getRegion = async (region) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      if (res.status === 200) {
        setCountrys(data);
      } else {
        getData();
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <select
        onChange={handleRegion}
        className=" outline-none py-[18px] px-3 w-[150px] md:w-[200px] md:px-6 bg-white dark:bg-[#2B3844] shadow-[0px_2px_9px_rgba(0,0,0,0.0532439)] rounded-[5px] dark:text-white"
        name="Region"
      >
        <option className="font-normal text-[14px] leading-5 text-[#111517] dark:text-white">
          Filter by Region
        </option>
        <option
          value="Africa"
          className="font-normal text-[14px] leading-5 text-[#111517] dark:text-white"
        >
          Africa
        </option>
        <option
          value="America"
          className="font-normal text-[14px] leading-5 text-[#111517] dark:text-white"
        >
          America
        </option>
        <option
          value="Asia"
          className="font-normal text-[14px] leading-5 text-[#111517] dark:text-white"
        >
          Asia
        </option>
        <option
          value="Europe"
          className="font-normal text-[14px] leading-5 text-[#111517] dark:text-white "
        >
          Europe
        </option>
        <option
          value="Oceania"
          className="font-normal text-[14px] leading-5 text-[#111517] dark:text-white "
        >
          Oceania
        </option>
      </select>
    </div>
  );
};

export default RegionFiltr;
