"use client";
import { useState, useEffect } from "react";
import image1 from "@/../public/assets/SilderImg01.png";
import image2 from "@/../public/assets/SilderImg02.png";
import slidericon1 from "@/../public/assets/slideicon1.png";
import slidericon2 from "@/../public/assets/slideicon2.png";
import Image from "next/image";

let data = [
  {
    body: slidericon1,
    img: image1,
  },
  {
    body: slidericon2,
    img: image2,
  },
  {
    body: slidericon1,
    img: image1,
  },
];

export default function Carousel() {
  let [num, setNum] = useState(0);
  const performTask = () => {
    if (num == 2) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  };
  setTimeout(performTask, 5000);
  return (
    <div className=" h-[1200px] xl:h-[600px] shrink-0 bg-[url('../../public/assets/sliderbg.png')] bg-purple-900 bg-no-repeat bg-cover ">
      <div className="relative shrink-0 h-[1200px] xl:h-[600px] bg-cover bg-no-repeat">
        <div className=" flex flex-col justify-center items-center gap-[25px] pt-[28px] pl-[20px]">
          <Slide Ind={num} />
          <div className="hidden xl:flex absolute bottom-10 w-[799.017px] justify-center items-center gap-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle
                cx="6"
                cy="5.94153"
                r="5.5"
                fill={num == 0 ? "#602D89" : "#808080"}
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle
                cx="6"
                cy="5.94153"
                r="5.5"
                fill={num == 1 ? "#602D89" : "#808080"}
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle
                cx="6"
                cy="5.94153"
                r="5.5"
                fill={num == 2 ? "#602D89" : "#808080"}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide({ Ind }) {
  let [img, setImg] = useState("");

  useEffect(() => {
    setImg(data[Ind].img);
  }, [Ind]);
  return (
    <div className="w-screen flex flex-col xl:flex-row justify-between items-center px-[85px] h-[auto]  xl:gap-[0px]">
      <div className="inline-flex flex-col h-[550px] justify-center items-center gap-24px shrink-0">
        <Image
          src={data[Ind].body}
          alt="slideIcons"
          className="lg:relative lg:right-44"
        />

        <p className="w-511 font-inter text-[50px] text-white">
          {Ind == 0 ? (
            <p>
              <p>Sacred Essence of Nature</p>
              <p>with AADHAVON</p>
            </p>
          ) : Ind == 1 ? (
            <p>
              <p>Purity and Richness of Fresh </p>
              <p>A2 Ghee, Crafted for your</p>
              <p>Health</p>
            </p>
          ) : (
            <span>
              <span>
                <p>Sacred Essence of Nature</p>
                <p>with AADHAVON</p>
              </span>
            </span>
          )}
        </p>

        <div className="relative sm:right-52 pt-14 flex items-start gap-[23px] content-start flex-wrap">
          <div className="cursor-pointer flex rounded-xl sm:py-[30px] sm:px-[30px]  xl:py-[15px] px-[31px] items-center bg-[#FFD700]">
            <p className="text-[#000000] font-inter text-24px font-bold">
              <span>Shop Now </span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width="20"
              height="20"
              fill="none"
            >
              <path
                fill="#602D89"
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute xl:right-0 bottom-0  flex w-[567px] justify-center items-center gap-[43px]">
        <Image src={img} alt="" height="700" width="750" class=" shrink-0" />
      </div>
    </div>
  );
}
