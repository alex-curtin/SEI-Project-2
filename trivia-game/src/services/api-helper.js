import axios from "axios";


export const getCategories = async () => {
  const resp = await axios.get('https://opentdb.com/api_category.php');
  return resp.data.trivia_categories;
}

export const getQuestion = async (cat) => {
  const resp = await axios.get(`https://opentdb.com/api.php?amount=1&category=${cat}&type=multiple`);
  return resp.data.results[0];
}