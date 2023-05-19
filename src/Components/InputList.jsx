import React from "react";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import RegionFiltr from "./RegionFiltr";

const InputList = ({ setCountrys, getData }) => {
  const handleSubmit = (e) => {
    // if (e.key === "Enter") {
    getName(e.target.value);
    // } else {
    //   getData();
    // }
  };
  useEffect(() => {
    getName();
  }, []);

  const getName = async (name) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      if (res.status === 200) {
        setCountrys(data);
      } else {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pb-[48px] grid gap-5 items-center md:flex justify-between">
      <div className="py-[18px] flex items-center gap-[30px] bg-white px-[34px] dark:bg-[#2B3844] w-[280px] shadow-[0px_2px_9px_rgba(0,0,0,0.0532439)] rounded-[5px] md:w-[480px]">
        <FaSearch className="dark:text-white"></FaSearch>
        <input
          onChange={handleSubmit}
          className="outline-none dark:text-white w-full bg-inherit font-normal text-[14px] leading-[20px] text-[#848484]"
          type="text"
          placeholder="Search for a country…"
        />
      </div>
      <RegionFiltr setCountrys={setCountrys} getData={getData}></RegionFiltr>
    </div>
  );
};

export default InputList;
