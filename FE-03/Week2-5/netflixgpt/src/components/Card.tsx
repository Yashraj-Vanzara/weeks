import { img_cdn } from "../constants/constant"
interface poster{
  posterPath:string
}

const Card = ({posterPath}:poster) => {
  return (
    <div className="w-48 pr-4">
        <img src={img_cdn+posterPath} alt="Movie Card" />
    </div>
  )
}

export default Card