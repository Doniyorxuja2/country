import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardList from "../Components/CardList";
import InputList from "../Components/InputList";

const Home = () => {
  const [countrys, setCountrys] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await res.json();
      if (res.status === 200) {
        setCountrys(data);
      }
    } catch (error) {
      console.log("error");
    }
  };

  // console.log(countrys)
  return (
    <div className="h-full py-[48px] bg-[#f2f2f2] dark:bg-[#202C36]">
      <div className="container mx-auto">
        <InputList getData={getData} setCountrys={setCountrys}></InputList>
        <div className="text-center w-full m-auto justify-center grid gap-[40px] sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 lg:gap-[60px]">
          {countrys.map((country, index) => (
            <CardList key={index} {...country}></CardList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
