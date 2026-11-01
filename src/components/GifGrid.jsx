import GifCard from "./GifCard";
import useImages from "../hooks/useImages";

const GifGrid = ({ category }) => {


    const {images, loading } = useImages({category});
    return (
        <div>
            <h3>{category}</h3>

            {loading && <p> Cargando ... </p>}

            <div className="card-grid">
                {images.map((image) => {
                    return <GifCard key={image.id} { ... image} />;
                })}
            </div>
        </div>
    );
};

export default GifGrid;

//9sa6uVRaAf75fbUdLQO094KC9LumDB5E