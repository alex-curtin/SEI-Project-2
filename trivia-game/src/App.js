import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { getCategories } from './services/api-helper';
import Categories from './components/Categories';
import Start from './components/Start';
import Display from './components/Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCats: [],
      score: 0,
    }
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categories: categories,
    });
  }

  handleCheck = (ev) => {
    ev.preventDefault();
    const cat = {
      name: ev.target.name,
      id: ev.target.id
    }
    this.setState((prevState) => ({
      selectedCats:
        [...prevState.selectedCats, cat]
    }))
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
  }

  scorePoints = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>This is a Trivia Game</h1>
          <Link to='/'>Home</Link>
        </header>
        <Link to='/categories'>Categories</Link>
        <Link to='/start'>Start Game</Link>
        <p>something is working, at least</p>
        <Route
          path="/"
          exact render={() => (<div><h2>Home</h2></div>)}
        />
        <Route
          path='/categories'
          render={() =>
            <Categories
              categories={this.state.categories}
              handleSubmit={this.handleSubmit}
              handleCheck={this.handleCheck}
            />}
        />
        <Route
          path='/start'
          render={() => <Start />}
        />
        <Route
          path='/display'
          render={() =>
            <Display
              score={this.state.score}
              scorePoints={this.scorePoints}
            />}
        />
      </div>
    );
  }
}

export default App;
