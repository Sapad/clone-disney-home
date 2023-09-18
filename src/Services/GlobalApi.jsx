import axios from "axios";

const movieBaseUrl= BaseURl ;
const api_key = api_key

const movieByGenreBaseURL= BaseUrlGenre;

const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);

const getMovieByGenreId = (id) =>
axios.get(movieByGenreBaseURL+ "&with_genres=" + id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}