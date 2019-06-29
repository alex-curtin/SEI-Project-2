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
    }
  }

  async componentDidMount() {
    const resp = await getQuestion(19);
    this.setState({
      question: resp
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({
      answer: ev.target.id,
      isAnswered: true,
      isRight: false,
    })
  }

  render() {
    return (
      <div>
        <Question
          question={this.state.question.question}
          isAnswered={this.state.isAnswered}
          isRight={this.state.isRight}
        />
        {this.state.isAnswered ?
          <Result
            right={this.state.question.correct_answer}
            wrong={this.state.question.incorrect_answers}
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