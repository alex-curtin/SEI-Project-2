# SEI-Project-2

![](https://media.giphy.com/media/qBs04S9G7xRMA/giphy.gif)

## Trivia Game

### Wireframes
- [Home](/images/home.png)
- [Select Categories](/images/categories.png)
- [Question](/images/question.png)
- [Result](/images/result.png)

### Description
A trivia game that asks questions from randomly selected categories, based on a group of categories pre-selected by the user. It will inform the user if they were right or wrong and display the correct answer. It will also keep a running score throughout the game. The game will end after a certain number of questions and display the final score.

### Task List
- [ ] Home Component
  - [ ] Add some text explaining the game
  - [ ] Display stats from previous game(s), if applicable *
  - [ ] 'Play Again' if they've already played *
- [x] Select Categories Component
  - [x] Get categories from API and render them on page
  - [x] Add functionality so they add/remove categories from list
- [ ] Start component
  - [ ] Add options for selecting game length, difficulty
- [x] Info Component to keep track of score, question count, etc
- [x] Question Component
  - [x] randomly select category from user's selected list
  - [x] get question from API and render
  - [x] add correct/incorrect message after user submits answer
- [ ] Options/Results Component
  - [x] make array of right & wrong answers, shuffle them, render
  - [x] add functionality so clicking on right/wrong answer will give correct result
  - [x] once answer is submitted re-render options to show right/wrong answers
  - [ ] these could probably be refactored to one component *
- [ ] End of Game Component
  - [ ] Tell users their final score, friendly message
- [ ] Quit Game Component
  - [ ] Less friendly message
- [ ] Style App
  - [ ] Make it look nice, consistent
  - [ ] Responsive style for tablet
  - [ ] Responsive style for phone
- [ ] Other issues
  - [ ] Get rid of html codes on question & answer text

### Component Hierarchy
```
 <App />  - contains Header/Footer  States: score, right & wrong answer count
   <SelectCategories />  - checkbox form - user selects categories
   <StartGame />  - tells player game is starting
   <Display />  - displays score, category, difficulty, question count  States: current category, question, right answer, wrong answers, question difficulty
     <Question />  - presents question
        <Options />   - presents answer choices
     <Result />  - shows correct answer, change in score
   <EndGame />  - shows final score
   ```

### API
[Open Trivia Database api](https://opentdb.com/api_config.php)
- API calls will include:
  - getCategories() - gets a list of all available categories, doesn't require params.
  - getQuestion(cat) - returns one random question. Takes a category id as argument,     randomly selected from list chosen by user.

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

