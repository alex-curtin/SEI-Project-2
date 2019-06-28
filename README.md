# SEI-Project-2

## Trivia Game

### Wireframes
- [Home](/images/home.png)
- [Select Categories](/images/categories.png)
- [Question](/images/question.png)
- [Result](/images/result.png)

### Description
A trivia game that asks questions from randomly selected categories, based on a group of categories pre-selected by the user. It will inform the user if they were right or wrong and display the correct answer. It will also keep a running score throughout the game. The game will end after a certain number of questions and display the final score.

### Expected Problems & Proposed Solutions
- Keeping track of numerous game states, including: score, question count, current      category, current question, current options (right answer and wrong answers), current difficulty, etc.
  - Keep permanent states (score, question count) in App component
  - Keep temporary states (current question, current category) in Display component
- Creating form of all available categories from API
  - Use API call that returns all categories, store them in state as an array of objects with keys name (to display on form) and id (to pass to API calls for questions) 
  - Use map to create checkbox inputs for each to add to a form. Form submit changes array or creates a new array of only selected categories.
- Selecting random items from an array
  - something like: ```const item = array[Math.floor(Math.random() * array.lenght)];```
- Switching components based on user actions, such as submitting an answer.
  - Use witRouter and include 'this.props.history.push()' in handleSubmit function.

### Component Hierarchy
```
 <App />  - contains Header/Footer  States: score, right & wrong answer count
   <SelectCategories />  - checkbox form - user selects categories
   <StartGame />  - tells player game is starting
   <Display />  - displays score, category, difficulty, question count  States: current category, question, right answer, wrong answers, question difficulty
     <Question />  - presents question and answer choices
     <Result />  - shows right answer, change in score
   <EndGame />  - shows final score
   ```

### API
[Open Trivia Database api](https://opentdb.com/api_config.php)
- API calls will include:
  - getCategories() - gets a list of all available categories, doesn't require params.
  - getQuestion(cat) - returns one random question. Takes a category id as a param,     randomly selected from list chosen by user.

### MVP
- Let users choose from pre-determined trivia categories
- Get random, multiple choice questions from API for users to answer
- Inform users if they were correct/incorrect
- Display relevant game info, such as score, current category & question difficulty
- Keep score, correct & incorrect answer counts
- End game after certain number questions
- Style app, including responsivity
### PostMVP
- Adjust difficulty as game progresses based on number of right/wrong answers
- Add a time limit for answering question
- Keep track of player's best and worst categories

