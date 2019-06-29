import React from 'react';
import Question from './Question';
import Options from './Options';
import Result from './Result';
import { Route } from 'react-router-dom';
import { getQuestion } from '../services/api-helper';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      isAnswered: false,
      answer: '',
      isRight: true,
    }
  }

  async componentDidMount() {
    const resp = await getQuestion(9);
    this.setState({
      question: resp
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({
      answer: ev.target.id,
    })
    this.state.answer &&
      this.checkAnswer();
  }

  checkAnswer = () => {
    const check = (this.state.answer === this.state.question.correct_answer);
    this.setState({
      isRight: check,
      isAnswered: true,
    })
    check && this.props.scorePoints();
  }

  nextQuestion = async (ev) => {
    ev.preventDefault();
    const resp = await getQuestion(9);
    this.setState({
      question: resp,
      isAnswered: false,
      answer: '',
    })
  }

  render() {
    return (
      <div>
        <h4>SCORE: {this.props.score}</h4>
        <Question
          question={this.state.question.question}
          isAnswered={this.state.isAnswered}
          isRight={this.state.isRight}
        />
        {this.state.isAnswered ?
          <Result
            right={this.state.question.correct_answer}
            wrong={this.state.question.incorrect_answers}
            nextQuestion={this.nextQuestion}
          /> :
          <Options
            right={this.state.question.correct_answer}
            wrong={this.state.question.incorrect_answers}
            handleSubmit={this.handleSubmit}
          />}


      </div>
    )
  }
}

export default Display