import Image from "next/image";
import { motion } from "framer-motion";
import { imageAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import info from "../../profile.json";
import TopNav from "../navbar/TopNav";

const Hero = () => {
  return (
    <motion.section
      className="z-10 grid h-[90vh] w-full grid-cols-10 grid-rows-5 bg-[url('.//../public/hero.jpg')] bg-cover bg-center sm:h-[90vh] md:h-[100vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <div className="col-span-full row-span-1 mt-16 md:col-span-2 md:col-start-9">
        <TopNav
          github={info.socialMedia.github}
          linkedin={info.socialMedia.linkedin}
        />
      </div>

      <div className="col-span-full row-span-4 grid grid-rows-6 place-items-center gap-5 text-center">
        <span className={`row-span-2 mx-5 flex flex-col gap-5 font-extrabold`}>
          <AnimatedWords
            title={info.personalInfo.name.toUpperCase()}
            style="text-3xl md:text-5xl"
          />
          <div className="flex flex-col gap-5 sm:flex-row">
            <AnimatedWords
              title={`${info.personalInfo.jobTitle}`}
              style="text-xl md:text-3xl"
            />
            <AnimatedWords
              title={`|`}
              style="text-xl md:text-3xl"
              hidden={true}
            />
            <AnimatedWords
              title={`${info.personalInfo.jobTitle2}`}
              style="text-xl md:text-3xl"
            />
          </div>
        </span>
        <motion.div className="row-span-4" variants={imageAnimation}>
          <Image
            src={info.personalInfo.profilePicture}
            width={200}
            height={250}
            alt={`${info.personalInfo.name}'s headshot`}
            data-blobity-tooltip="Hi There!"
            data-blobity-invert="false"
            className="w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
