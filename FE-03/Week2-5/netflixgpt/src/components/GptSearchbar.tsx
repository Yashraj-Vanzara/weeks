import { useDispatch, useSelector } from "react-redux";
import lang from "../constants/languageConstants";
import type { AppDispatch, RootState } from "../utils/appStore";
import { useRef } from "react";
import ai from "../utils/ai";
import { options } from "../constants/constant";
import { addGptMovies, type GptMovie } from "../utils/gptSlice";

const GptSearchbar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const langkey = useSelector(
    (store: RootState) => store.config.lang,
  ) as keyof typeof lang;

  const fetchmovie = async (movie: string): Promise<GptMovie[]> => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, options);
    const json = await res.json();
    return (json.results ?? []) as GptMovie[];
  };

  const handleSearch = async () => {
    const userInput = searchRef.current?.value?.trim() ?? "";
    if (!userInput) return;

    const gptquery = `
You are a movie recommendation specialist.

Rules:
- Return exactly 5 movie names
- Output must be in a single line
- Separate movies using commas only
- No explanation, no extra text, no numbering

User input: ${userInput}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: gptquery,
    });
    const gptMovies = response.text
      ?.split(",")
      .map((movie) => movie.trim())
      .filter(Boolean) ?? [];
    const promiseArray = gptMovies.map((movie) => fetchmovie(movie));
    const tmdbresult = await Promise.all(promiseArray);
    dispatch(addGptMovies({ movienames: gptMovies, movieResults: tmdbresult }));

    console.log(tmdbresult);

  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2   bg-black grid grid-cols-12"
      >
        <input
          ref={searchRef}
          className="col-span-9 p-4 m-4 text-black bg-white "
          type="text"
          placeholder={lang[langkey].gptplaceholder}
        />
        <button
          onClick={handleSearch}
          className=" cursor-pointer py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg"
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
