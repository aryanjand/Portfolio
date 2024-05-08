"use cleint";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import info from "../../../profile.json";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-extrabold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
        {info.personalInfo.roles.map((role) => (
          <span key={role}>{role}</span>
        ))}
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
