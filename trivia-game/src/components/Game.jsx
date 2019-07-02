import React from 'react';
import Question from './Question';
import Options from './Options';
import Result from './Result';
import GameInfo from './GameInfo';
import { getQuestion } from '../services/api-helper';
import { shuffle } from '../services/helper-functions';
import { Link } from 'react-router-dom';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qCount: 1,
      question: '',
      isAnswered: false,
      answer: '',
      isRight: true,
      options: [],
    }
  }

  async componentDidMount() {
    const category = this.getRandomCategory();
    const resp = await getQuestion(category);
    this.setState({
      question: resp
    })
    this.createOptions();
  }

  getRandomCategory = () => {
    const categories = this.props.categories;
    const shuffled = categories &&
      shuffle(categories);
    return shuffled[0].id
  }

  createOptions = () => {
    const wrong = this.state.question.incorrect_answers;
    const right = this.state.question.correct_answer;
    const all = [...wrong, right]
    const options = shuffle(all);
    this.setState({
      options: options,
    })
  }

  handleSubmit = (ev) => {
    const check = (ev.target.id === this.state.question.correct_answer);
    this.setState({
      isRight: check,
      isAnswered: true,
    })
    check && this.props.scorePoints();
  }


  nextQuestion = async (ev) => {
    ev.preventDefault();
    const category = this.getRandomCategory();
    const resp = await getQuestion(category);
    this.setState((prevState) => ({
      question: resp,
      isAnswered: false,
      answer: '',
      qCount: prevState.qCount + 1,
      options: [],
    }))
    this.createOptions();
  }


  render() {
    return (
      <div id="display">
        <div id="displayTop">
          <div id="gameInfo">
            <GameInfo
              score={this.props.score}
              qCount={this.state.qCount}
              question={this.state.question}
            />
          </div>
          <div id="quit">
            {this.props.gameLength !== this.state.qCount.toString() &&
              <Link to="/end-game">
                <button id="quitButton">QUIT GAME</button>
              </Link>}
          </div>
        </div>
        <Question
          question={this.state.question.question}
          isAnswered={this.state.isAnswered}
          isRight={this.state.isRight}
        />
        {this.state.isAnswered ?
          <Result
            options={this.state.options}
            right={this.state.question.correct_answer}
            nextQuestion={this.nextQuestion}
            qCount={this.state.qCount}
            gameLength={this.props.gameLength}
          /> :
          <Options
            options={this.state.options}
            handleSubmit={this.handleSubmit}
          />}
      </div>
    )
  }
}

export default Game;