import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { getCategories, getQuestion } from './services/api-helper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      question: ''
    }
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categories: categories,
    });
  }

  render() {
    return (
      <div className="App">
        <p>something is working, at least</p>
      </div>
    );
  }
}

export default App;
