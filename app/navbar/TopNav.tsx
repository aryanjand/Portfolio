"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { bodyAnimation } from "../animations/animations";

type Props = {
  github: string;
  linkedin: string;
};

const TopNav = ({ github, linkedin }: Props) => {
  return (
    <div className="flex justify-center gap-10 text-[#e4ded7] sm:gap-12  md:justify-start md:gap-16 lg:gap-20 xl:gap-24">
      <Link href={github} target="_blank" aria-label="View GitHub Profile">
        <motion.p
          className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
          variants={bodyAnimation}
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="w-[20px] rounded-full p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
            data-blobity
            data-blobity-radius="38"
            data-blobity-offset-x="4"
            data-blobity-offset-y="4"
            data-blobity-magnetic="true"
          />
        </motion.p>
      </Link>
      <Link href={linkedin} target="_blank" aria-label="View LinkedIn Profile">
        <motion.p
          className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
          variants={bodyAnimation}
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="w-[20px] rounded-full p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
            data-blobity
            data-blobity-radius="38"
            data-blobity-offset-x="4"
            data-blobity-offset-y="4"
            data-blobity-magnetic="true"
          />
        </motion.p>
      </Link>
    </div>
  );
};

export default TopNav;
