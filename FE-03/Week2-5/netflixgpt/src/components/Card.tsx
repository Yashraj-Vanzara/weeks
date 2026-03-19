import { img_cdn } from "../constants/constant"
interface poster{
  posterPath:string | null
}

const Card = ({posterPath}:poster) => {
  if(!posterPath) return null
  return (
    <div className="w-48 pr-4">
        <img src={img_cdn+posterPath} alt="Movie Card" />
    </div>
  )
}

export default Card