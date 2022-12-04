window.onload = () => {
    getOriginals()
    getTrendingNow()
    getTopRated()
}

async function fetchMovies(url, dom_element, path_type) {
    const fetchService = await fetch(url)
    if (fetchService.ok) {
        const jsonObj = await fetchService.json()
        showMovies(jsonObj, dom_element, path_type)
    }
    else {
        throw new Error('something went wrong')
    }
}


const showMovies = (movies, dom_element, path_type) => {
    var moviesEl = document.querySelector(dom_element)

    for (const item of movies.results) {
        let imageElement = document.createElement('img')
        imageElement.src = `https://image.tmdb.org/t/p/original${item[path_type]}`
        moviesEl.appendChild(imageElement)

    }
    console.log(dom_element);
    console.log(path_type);
}

function getOriginals() {
    let URL = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
    fetchMovies(URL, '.original__movies', 'poster_path')
}


function getTrendingNow() {
    let URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
    fetchMovies(URL, '#trending_movie', 'backdrop_path')
}

function getTopRated() {
    var URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
    fetchMovies(URL, '#top_rated_movie', 'backdrop_path')
}