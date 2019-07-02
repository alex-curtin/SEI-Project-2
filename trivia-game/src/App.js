import React from 'react';
import './App.css';
import { withRouter, Route } from 'react-router-dom';
import { getCategories } from './services/api-helper';
import Categories from './components/Categories';
import Start from './components/Start';
import Game from './components/Game';
import Home from './components/Home';
import EndGame from './components/EndGame';

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
      this.addCategory(cat)
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

  handleChange = (ev) => {
    const value = ev.target.value
    this.setState({
      gameLength: value,
    })
  }

  scorePoints = (points) => {
    this.setState((prevState) => ({
      score: prevState.score + points,
    }))
  }

  resetScore = () => {
    this.setState({
      score: 0,
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Trivia Game</h1>
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
          render={() => <Start
            gameLength={this.state.gameLength}
            handleChange={this.handleChange}
          />}
        />
        <Route
          path='/game'
          render={() =>
            <Game
              categories={this.state.selectedCats}
              score={this.state.score}
              scorePoints={this.scorePoints}
              gameLength={this.state.gameLength}
            />
          }
        />
        <Route
          path='/end-game'
          render={() =>
            <EndGame
              score={this.state.score}
              resetScore={this.resetScore}
            />
          }
        />
      </div>
    );
  }
}

export default withRouter(App);
