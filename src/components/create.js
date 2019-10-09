import React from 'react';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChangeMovieTitle = this.handleChangeMovieTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeMovieTitle(e) {
    this.setState({Title: e.target.value});
  }

  handleChangeMovieYear(e) {
    this.setState({Year: e.target.value});
  }

  handleChangeMoviePoster(e) {
    this.setState({Poster: e.target.value});
  }
  
  handleSubmit(e) {
    alert('Movie: ' + this.state.Title + "     " + this.state.Year + "   " + this.state.Poster);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Hello from Create component</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
          <label>
          Movie Title:
          </label>
          <input type="text" value={this.state.Title} 
          onChange={this.handleChangeMovieTitle} />
        
        </div>
        
      
      <div className='form-control'></div>

      <label>
        Movie Year:
        <input type="text" value={this.state.Year} 
        onChange={this.handleChangeMovieYear} />
      </label>

      <label>
        Movie Poster Url:
        <textarea rows='3' className='from-control'
        value={this.state.Poster}
        onChange={this.handleChangeMoviePoster}>   
        </textarea>
      </label>
      <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Create;