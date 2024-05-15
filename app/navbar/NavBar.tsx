"use client";
import Link from "next/link";
import info from "../../profile.json";

const NavBar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    // e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex w-[306px] items-center justify-center gap-1 rounded-lg bg-[#07070a]/90 px-1 py-1 text-[#e4ded7] backdrop-blur-md sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
      <Link
        href={info.personalInfo.resumeLink}
        target="_blank"
        aria-label="View Resume"
      >
        <h4 className="py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block  md:text-[16px] lg:block">
          View Resume
        </h4>
      </Link>

      <Link
        href="#work"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to Work Section"
      >
        <h4 className="rounded py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
          Work
        </h4>
      </Link>

      <Link
        href="#about"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to About Section"
      >
        <h4 className="rounded py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
          About
        </h4>
      </Link>
    </nav>
  );
};

export default NavBar;
