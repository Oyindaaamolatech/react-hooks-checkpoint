import React, { Component } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    movies: [
      {
        title: 'Movie 1',
        description: 'Description for Movie 1',
        posterURL: 'url-to-poster-1',
        rating: 4.5,
      },
      // Add more movies...
    ],
    filterTitle: '',
    filterRate: '',
  };

  handleFilterTitleChange = (value) => {
    this.setState({ filterTitle: value });
  };

  handleFilterRateChange = (value) => {
    this.setState({ filterRate: value });
  };

  render() {
    const { movies, filterTitle, filterRate } = this.state;
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        (!filterRate || movie.rating >= parseFloat(filterRate))
    );

    return (
      <div className="app">
        <Filter
          filterTitle={filterTitle}
          filterRate={filterRate}
          onFilterTitleChange={this.handleFilterTitleChange}
          onFilterRateChange={this.handleFilterRateChange}
        />
        <MovieList movies={filteredMovies} />
      </div>
    );
  }
}

export default App;
