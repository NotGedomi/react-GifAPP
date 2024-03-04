const apiKey = "dZ6Low5Z30vADXlBLXUC6qnhBv55XyJ7";
const limit = 40;

export const getGifs = async (_category, _limit) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${_category}&limit=${limit}`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    const gifs = data.map(imagen => {
        return ({
            id: imagen.id,
            title: imagen.title,
            url: imagen.images.downsized_medium.url,
        })
    });
    return gifs;
}