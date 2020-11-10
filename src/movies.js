// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors() {
  let allDirectors = movies.map(function (movie) {
    return movie.director;
  });
  if ((movies.length = allDirectors.length)) {
    return allDirectors;
  }
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies() {
  if (moviesArray.length === 0) {
    return 0;
  }
  let spielbergMovies = movies.filter(function (movie) {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return spielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let ratesOfAllMovies = moviesArray.reduce(function (sum, movie) {
    return sum + movie.rate;
  }, 0);
  let averageRates = ratesOfAllMovies / moviesArray.length;
  return Math.round(averageRates * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate() {
  let allDramaMovies = moviesArray.filter(function (movie) {
    return movie.genre.includes('Drama');
  });
  let rateOfAllDramaMovies = allDramaMovies.reduce(function (sum, movie) {
    return sum + movie.rate;
  }, 0);
  let averageRateDramaMovies = rateOfAllDramaMovies / allDramaMovies.lenght;

  return averageRateDramaMovies;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear() {
  const sortedMoviesByYear = [...movies];
  sortedMoviesByYear.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedMoviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically() {
  const sortedMoviesByTitle = [...movies];
  sortedMoviesByTitle.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  return sortedMoviesByTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
