import React from "react";
import { Button } from "./ui/button";
import { fontInter, fontJakartaSans } from "@/app/ui/fonts";
import { Progress } from "./Progress";
import Image from "next/image";
import trendingImg from "@/public/trendingImg.svg";
import arrowIcon from "@/public/arrowTopRight.svg";

const HeroSection = () => {
  return (
    <div className="px-3 my-[12%] text-white ">
      <div className="container mx-auto flex flex-col gap-20 md:gap-0 md:flex-row items-center justify-center md:justify-between md:items-end text-center md:text-left">
        {/* LEFT CARD */}
        <div className="md:hero-left-gradient md:min-w-[calc(60%-2rem)] flex flex-col items-center md:items-start justify-between gap-8 rounded-md">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex flex-col gap-2">
              <h1
                className={`${fontJakartaSans} text-6xl lg:text-[5em] font-bold max-w-[10em] leading-16 lg:leading-22 capitalize`}
              >
                Find your perfect home
              </h1>
              <p className={`${fontInter} text-2xl font-light`}>
                Fast closings, Local expertise, Inventory size
              </p>
            </div>
            <Button
              variant="default"
              size="lg"
              className="w-fit font-semibold bg-primary p-6"
            >
              Request a viewing
            </Button>
          </div>
          <div className="flex items-start gap-1 font-semibold bg-secondary/30">
            <div className="bg-secondary/30 p-4 lg:p-6 rounded-md">
              <small className="text-sm">Years</small>
              <div className={`${fontJakartaSans} text-4xl`}>70+</div>
            </div>
            <div className="bg-secondary/30 p-4 lg:p-6 rounded-md">
              <small>Happy Customers</small>
              <div className={`${fontJakartaSans} text-4xl`}>250k+</div>
            </div>
            <div className="bg-secondary/30 p-4 lg:p-6 rounded-md">
              <small className="whitespace-nowrap">Satisfaction Rate</small>
              <div className={`${fontJakartaSans} text-4xl`}>92%</div>
            </div>
          </div>
        </div>
        {/* RIGHT CARD */}
        <div className="md:w-[calc(30%)] flex flex-col gap-4">
          <div className="bg-secondary/70 p-6 rounded-xl">
            <div className="flex flex-col gap-2">
              <Image src={trendingImg} alt="Images of trending homes" />
              <div className="flex justify-between items-start">
                <div className="flex flex-col items-start">
                  <h3 className={`${fontJakartaSans} capitalize text-2xl`}>
                    Modern Architecture
                  </h3>
                  <p className={`${fontInter}`}>View trending properties</p>
                </div>
                <Button variant="link">
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon"
                    width={20}
                    height={20}
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-secondary/70 p-6 rounded-xl">
            <Progress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
