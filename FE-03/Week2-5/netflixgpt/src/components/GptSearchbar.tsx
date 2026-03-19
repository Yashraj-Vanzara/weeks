import { useSelector } from "react-redux"
import lang from "../constants/languageConstants"
import type { RootState } from "../utils/appStore"

const GptSearchbar = () => {
  const langkey = useSelector((store: RootState) => store.config.lang) as keyof typeof lang
  return (

    <div className="pt-[10%] flex justify-center ">
        <form className="w-1/2   bg-black grid grid-cols-12">
            <input className="col-span-9 p-4 m-4 text-black bg-white " type="text" placeholder={lang[langkey].gptplaceholder} />
            <button className=" cursor-pointer py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg">
                {lang[langkey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchbar