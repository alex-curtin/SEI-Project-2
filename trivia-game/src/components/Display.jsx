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
      question: ''
    }
  }

  async componentDidMount() {
    const resp = await getQuestion(19);
    this.setState({
      question: resp
    })
  }

  render() {
    return (
      <div>
        <Question
          question={this.state.question.question}
        />
        <Options
          answer={this.state.question.correct_answer}
          wrong={this.state.question.incorrect_answers}
        />
        <Route
          path="/result"
          render={() => <Result />}
        />
      </div>
    )
  }
}

export default Display