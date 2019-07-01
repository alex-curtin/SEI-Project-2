import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { getCategories } from './services/api-helper';
import Categories from './components/Categories';
import Start from './components/Start';
import Game from './components/Game';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCats: [],
      score: 0,
      gameLength: 20,
    }
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categories: categories,
    });
  }

  changeSelected = (cat) => {
    const current = this.state.selectedCats;
    current.includes(cat) ?
      this.removeCategory(cat) :
      this.addCategory(cat);
  }

  addCategory = (catToAdd) => {
    this.setState((prevState) => ({
      selectedCats:
        [...prevState.selectedCats, catToAdd]
    }))
  }

  removeCategory = (catToDelete) => {
    const current = this.state.selectedCats;
    const cats = [...current];
    const newCats = cats.filter(cat => cat !== catToDelete);
    this.setState({
      selectedCats: newCats,
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
  }

  scorePoints = () => {
    this.setState((prevState) => ({
      score: prevState.score + 100,
    }))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>This is a Trivia Game</h1>
        </header>
        <Route
          path="/"
          exact render={() => <Home />}
        />
        <Route
          path='/categories'
          render={() =>
            <Categories
              categories={this.state.categories}
              changeSelected={this.changeSelected}
              selectedCats={this.state.selectedCats}
            />}
        />
        <Route
          path='/start'
          render={() => <Start />}
        />
        <Route
          path='/game'
          render={() =>
            <Game
              categories={this.state.selectedCats}
              score={this.state.score}
              scorePoints={this.scorePoints}
            />}
        />
      </div>
    );
  }
}

export default App;
