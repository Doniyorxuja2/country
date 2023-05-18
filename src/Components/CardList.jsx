import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";

const CardList = ({ population, flags, name, region, capital }) => {
  let pop = numeral(population).format("0,0");
  return (
    <Link to={`/country/${name.common}`}>
      <div className=" h-[320px] shadow-[1px_8px_23px_8px_rgba(34,60,80,0.2)] bg-white w-[260px] rounded-[5px] dark:bg-[#2B3844] ">
        <img
          className="w-[260px] h-[160px]"
          src={flags.png}
          alt=""
          width={260}
          height={160}
        />
        <div className="p-4">
          <h1 className="mb-4 font-extabold text-[18px] leading-7 text-[#111517] dark:text-white">
            {name.common}
          </h1>
          <div className="mb-2 font-semibold text-[14px] leading-4 text-[#111517] dark:text-white">
            Population: <span>{pop}</span>
          </div>
          <div className="mb-2 font-semibold text-[14px] leading-4 text-[#111517] dark:text-white">
            Region: <span>{region}</span>
          </div>
          <div className=" font-semibold text-[14px] leading-4 text-[#111517] dark:text-white">
            Capital: <span>{capital}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardList;
