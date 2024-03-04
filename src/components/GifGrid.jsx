import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ gifCategory }) => {

    const { images, isLoading } = useFetchGifs(gifCategory)

    return (
        <>
            <h3>{gifCategory}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {images.map((element) => <GifItem key={element.id} {...element}/>)}
            </div>
        </>
    )
}
