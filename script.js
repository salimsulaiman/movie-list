let BASE_URL = "https://api.themoviedb.org/";
let API_KEY = "8fc47fbbcf95207ff70d61ec67f3f8ff";
let movies = [];
let container = document.getElementById("container");
let containerNewest = document.getElementById("container-newest");
let title = document.getElementById("title");
let bestMovie = document.querySelector(".bestMovie");
let carousel_inner = document.getElementById("carousel-inner");
let carouselExampleControls = document.getElementById(
  "carouselExampleControls"
);

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let search = document.getElementById("search").value;
  // console.log(search);
  // getMovieBySearch(search);
  const inputSearch = search;
  if (inputSearch) {
    carouselExampleControls.style.display = "none";
    title.innerText = "Results";
    bestMovie.style.display = "none";
    getMovieBySearch(search);
  } else {
    carousel();
    getMovie();
    getMovieByNewest();
    // carousel();
  }

  document.getElementById("searchForm").reset();
});

let getMovieBySearch = async (inputUser) => {
  try {
    let response = await fetch(
      `${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${inputUser}&sort_by=popularity.desc`
    );
    let movies = await response.json();
    container.innerHTML = "";
    containerNewest.innerHTML = "";
    for (let i = 0; i < movies.results.length; i++) {
      // console.log(movies.results[i]);
      container.innerHTML += `
      <div class="col-md-2">
      <div class="card my-3">
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/${movies.results[i].poster_path}"
          class="card-img-top"
          alt="${movies.results[i].title}"
        />
        <div class="card-body">
          <div class="card-text">
            <div class="d-flex justify-content-between">
              <p>${movies.results[i].title}</p>
              <p><b>${movies.results[i].vote_average}</b></p>
            </div>
          </div>
          <p>${movies.results[i].release_date}</p>
        </div>
      </div>
    </div>`;
    }
  } catch (error) {
    console.log(error);
  }
};

let getMovie = async () => {
  try {
    let response = await fetch(
      `${BASE_URL}3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`
    );
    let movies = await response.json();
    // console.log(movies);
    container.innerHTML = "";
    carousel_inner.innerHTML = `
    <div class="carousel-item active">
      <img src="https://www.themoviedb.org/t/p/original/${movies.results[0].backdrop_path}" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>${movies.results[0].title}</h5>
        <p>${movies.results[0].overview}</p>
      </div>
    </div>`;
    for (let i = 0; i < movies.results.length; i++) {
      // console.log(movies.results[i].title);
      container.innerHTML += `
      <div class="col-md-2">
      <div class="card my-3">
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/${movies.results[i].poster_path}"
          class="card-img-top"
          alt="${movies.results[i].title}"
        />
        <div class="card-body">
          <div class="card-text">
            <div class="d-flex justify-content-between">
              <p>${movies.results[i].title}</p>
              <p><b>${movies.results[i].vote_average}</b></p>
            </div>
          </div>
          <p>${movies.results[i].release_date}</p>
        </div>
      </div>
    </div>`;
    }
  } catch (error) {
    console.log(error);
  }
};

getMovie();

let getMovieByNewest = async () => {
  try {
    let response = await fetch(
      `${BASE_URL}3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc`
    );
    let movies = await response.json();
    // console.log(movies);
    containerNewest.innerHTML = "";
    for (let i = 0; i < movies.results.length; i++) {
      // console.log(movies.results[i].title);
      containerNewest.innerHTML += `
      <div class="col-md-2">
      <div class="card my-3 background-grey">
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/${movies.results[i].poster_path}"
          class="card-img-top"
          alt="${movies.results[i].title}"
        />
        <div class="card-body">
          <div class="card-text">
            <div class="d-flex justify-content-between">
              <p>${movies.results[i].title}</p>
              <p><b>${movies.results[i].vote_average}</b></p>
            </div>
          </div>
          <p>${movies.results[i].release_date}</p>
        </div>
      </div>
    </div>`;
    }
  } catch (error) {
    console.log(error);
  }
};

getMovieByNewest();

let carousel = async () => {
  let response = await fetch(
    `${BASE_URL}3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`
  );
  let movies = await response.json();
  movies.results.slice(1, 5).forEach((item) => {
    // console.log(item);
    carousel_inner.innerHTML += `
      <div class="carousel-item">
        <img src="https://www.themoviedb.org/t/p/original/${item.backdrop_path}" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>${item.title}</h5>
          <p>${item.overview}</p>
        </div>
      </div>`;
  });
};

carousel();
