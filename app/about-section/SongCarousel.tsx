import SongCard from "./SongCard";
import { SongProps } from "./song-interface";
import info from "../../profile.json";
import "../animations/animate.css";

const SongCarousel = () => {
  return (
    <div className="animate absolute bottom-5 flex w-[99%] sm:w-[99%] md:w-[99%] lg:w-[99%] xl:w-[99%]">
      <div className="mx-auto flex w-[50%] justify-around gap-10 lg:my-[1px]">
        {info.favoriteSongs.map((song: SongProps) => (
          <SongCard
            key={song.title}
            title={song.title}
            artist={song.artist}
            image={song.image}
            link={song.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SongCarousel;
