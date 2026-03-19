import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, type ChangeEvent } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { setGpt } from "../utils/gptSlice";
import { Supportedlang } from "../constants/constant";
import { setLang } from "../utils/configSlice";
import type { AppDispatch, RootState } from "../utils/appStore";
import type { LanguageCode } from "../constants/constant";

const Header = () => {
  const user = useSelector((store: RootState) => store.user);
  const gptstore = useSelector((store: RootState) => store.gpt.showGpt);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          }),
          navigate("/browse"),
        );
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

  const handleGpt = () => {
    dispatch(setGpt());
  };

  const handleLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLang(e.target.value as LanguageCode));
  };
  return (
    <div className="px-16 py-4 absolute z-99 w-full flex justify-between bg-linear-to-b from-[#212121] via-neutral-900 to-neutral-900/50 ">
      <img
        className="w-44 h-auto"
        src="/netflix.svg"
        alt="netflixlogo"
      />
      {user && (
        <div className="flex gap-2  items-center">
          {gptstore &&  <select className="p-2 bg-slate-400 text-white m-2" onChange={handleLanguage} >
           {Supportedlang.map((lang=>(
            <option key={lang.code} value={lang.code}>{lang.name}</option>
           )))}
          </select> }
         
          <button onClick={handleGpt} className="px-2 py-2 cursor-pointer rounded-md text-white bg-purple-500">{gptstore?"Home":"GptSearch"}</button>
          <img src="/user-icon.png" alt="user" />
          <p className="text-white">{user.displayName}</p>
          <button
            onClick={handleSignout}
            className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
