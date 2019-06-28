# SEI-Project-2

## Trivia Game

### Wireframes
- [Home](/images/home.png)
- [Select Categories](/images/categories.png)
- [Question](/images/question.png)
- [Result](/images/result.png)

### Description
A trivia game that asks questions from randomly selected categories, based on a group of categories pre-selected by the user. It will inform the user if they were right or wrong and display the correct answer. It will also keep a running score throughout the game. The game will end after a certain number of questions and display the final score.

### Expected Problems
- 


### Component Hierarchy
```
 <App />
   <SelectCategories />
   <StartGame />
   <Display />
     <Question />
     <Result />
   <EndGame />
   ```

### API
[Open Trivia Database api](https://opentdb.com/api_config.php)

### MVP
- Let users choose from pre-determined trivia categories
- Get random, multiple choice questions from API for users to answer
- Inform users if they were correct/incorrect
- Keep score
### PostMVP
- Adjust difficulty as game progresses based on number of right/wrong answers
- Add a time limit for answering question

