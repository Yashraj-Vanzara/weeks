import { LOGO_URL } from "../utils/constants";

const Logo:React.FC = () => {
  return (
    <div className="Logo">
        <img className="w-[128px]" src={LOGO_URL} alt="logo" />
    </div>
  )
}

export default Logo