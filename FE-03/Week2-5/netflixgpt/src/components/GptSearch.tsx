import GptMovies from "./GptMovies";
import GptSearchbar from "./GptSearchbar";

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-1 ">
            <img
            className="h-screen object-cover lg:h-auto"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_large.jpg"
        alt=""
      />
        </div>
      <GptSearchbar />
      <GptMovies />
    </div>
  );
};

export default GptSearch;
