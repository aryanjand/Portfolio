import Image from "next/image";
import { SongProps } from "./song-interface";
import Link from "next/link";

const SongCard = ({ title, artist, image, link }: SongProps) => {
  return (
    <Link href={link} target="_blank" aria-label="Check out song on Spotify">
      <div
        className={`relative flex h-[138px] w-[195px] items-center justify-center overflow-hidden rounded-xl py-0 sm:h-[140px] sm:w-[200px] md:h-[160px] md:w-[250px] lg:h-[190px] lg:w-[270px]`}
      >
        <Image
          src={image}
          width={640}
          height={640}
          alt={title}
          className="w-full items-stretch justify-center rounded-xl bg-cover bg-center"
        />
        <div className="absolute bottom-3 left-5 hidden">
          <p className="text-[14px] text-white">{artist}</p>
          <h4 className="text-[30px] text-white">{title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default SongCard;
