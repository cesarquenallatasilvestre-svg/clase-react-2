
export const getGifs = async (category) => {
        const limit = 10;
        const apikey = "KFZDBH5SQE0fWONorqzzIP02EehtaroA";
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${category}&limit=5`;
    
        const respuesta = await fetch (url);

        console.log(respuesta);

        const {data = []} = await respuesta.json();

        console.log(data);

        const gifsNuevas = data.map((gif) => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images.downsized_medium.url
            }
        })

        

        return gifsNuevas;
    };