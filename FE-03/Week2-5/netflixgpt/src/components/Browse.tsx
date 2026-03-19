import { useSelector } from "react-redux";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useTrending from "../hooks/useTrending";
import useUpcoming from "../hooks/useUpcoming";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import type { RootState } from "../utils/appStore";

const Browse = () => {
  const showGpt = useSelector((store:RootState) => store.gpt.showGpt);

  useNowPlaying();
  usePopular();
  useTrending();
  useUpcoming();

  return (
    <div>
      <Header />
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
