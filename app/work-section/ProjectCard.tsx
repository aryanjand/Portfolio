import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./project-interface";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      className={`w-full rounded-3xl bg-[#212531] bg-center`}
      initial="initial"
      animate="animate"
    >
      <div className="grid-container grid-rows-auto grid grid-cols-5 gap-5">
        <div
          className={`row-span-1 px-5 lg:px-7 ${
            id % 2 === 0
              ? "col-span-5 md:col-span-4 md:col-start-1"
              : "col-span-5 md:col-span-4 md:col-start-2"
          }`}
        >
          <div className={`mt-6 text-[#0E1016] lg:mt-10`}>
            {available ? (
              <div
                className={`flex gap-8 ${
                  id % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <Link
                  href={github}
                  target="_blank"
                  className="rounded-full"
                  aria-label="Open GitHub Repository"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="true"
                  />
                </Link>
                <Link href={demo} target="_blank" aria-label="Open Live Demo">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="w-[20px] rounded-full bg-white p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="trues"
                  />
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>

          <AnimatedTitle
            text={name}
            className={`text-[34px] text-white md:text-[38px] lg:text-[40px] ${
              id % 2 === 0 ? "" : "text-right"
            }`}
          />
          <AnimatedBody
            text={description}
            className={`mt-4 text-[12px] font-semibold text-[#95979D] md:text-[14px] lg:text-[16px] ${
              id % 2 === 0 ? "" : "text-right"
            }`}
          />
          <div
            className={`mt-9 flex flex-wrap gap-4 ${
              id % 2 === 0 ? "" : "justify-end"
            }`}
          >
            {technologies.map((tech, id) => (
              <p key={id} className={"text-xs font-bold uppercase  lg:text-sm"}>
                {tech}
              </p>
            ))}
          </div>
        </div>
        <div
          className={`col-span-5 flex justify-center md:col-span-4 ${
            id % 2 === 0
              ? "md:col-start-2 md:justify-end"
              : "md:col-start-1 md:justify-start"
          }`}
        >
          <Image
            src={image}
            alt={name}
            width={720}
            height={325}
            className={`h-auto max-h-full w-[85%] rounded-3xl`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
