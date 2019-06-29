import React from 'react';
import Question from './Question';
import Options from './Options';
import Result from './Result';
import { Route } from 'react-router-dom';
import { getQuestion } from '../services/api-helper';
import { shuffle } from '../services/helper-functions';

class Display extends React.Component {
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
    const resp = await getQuestion(9);
    this.setState({
      question: resp
    })
    this.createOptions();
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
    const resp = await getQuestion(9);
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
        <div id="info">
          <p>SCORE: {this.props.score}</p>
          <p>QUESTION # {this.state.qCount}</p>
          <p>CATEGORY: {this.state.question.category}</p>
          <p>DIFFICULTY: {this.state.question.difficulty}</p>
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
          /> :
          <Options
            options={this.state.options}
            handleSubmit={this.handleSubmit}
          />}
      </div>
    )
  }
}

export default Display