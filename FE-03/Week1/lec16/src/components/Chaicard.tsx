
interface ChaicardProps {
    name: string;
    price: number;
    isspecial?: boolean;
}
const Chaicard = ({name,price,isspecial=false}: ChaicardProps) => {
  return (
    <article>
        <h2>{name} {isspecial && <span>*</span>}</h2>
            <p>Price: {price}</p>
    </article>

  )
}

export default Chaicard