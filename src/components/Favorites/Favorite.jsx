import { useSelector } from "react-redux";
import Card from "../card/Card";

const Favorites = () => {

    const favorites = useSelector( state => state.favorites);

    return (
<>
{
    favorites.map( ({ id, name, status, species, gender, origin, image })=> {
        return <Card
        key={id}

          id={id}

            name={name}

            status={status}

            species={species}

            gender={gender}

            origin={origin.name}

            image={image}


        />
    })
}
</>
    )
};

export default Favorites;