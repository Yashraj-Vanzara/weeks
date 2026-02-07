import { LOGO_URL } from "../utils/constants";

const Logo:React.FC = () => {
  return (
    <div className="Logo">
        <img src={LOGO_URL} alt="logo" />
    </div>
  )
}

export default Logo