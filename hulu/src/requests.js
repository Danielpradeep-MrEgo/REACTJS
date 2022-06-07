const API_KEY="fffb26e0039aec748510059892f97df0"


// requests.fetchTrending
export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSCiFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTv: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    // fetchTrending: `/discover/movie?api_key=${API_KEY}&with_genres=`,
    // fetchTrending: `/trending/all/week?api_key=${API_KEY}&with_genres=`,
}

