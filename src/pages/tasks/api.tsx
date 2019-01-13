import axios from 'axios';

const tasksUrl = `${process.env.REACT_APP_API_URL}/tasks`;

const find = async ():Promise<Array<Object>> => {
  let tasks = Promise.resolve([]);
  try {
    // @ts-ignore
    tasks = await axios.get(tasksUrl);
  } catch (error) {
    console.log(error);    // { "error": 400 }
  }
  // @ts-ignore
  return tasks.data;
};

const findOne = async (id:string):Promise<Object> => {
  const url = `${tasksUrl}/${id}`;
  let task = Promise.resolve();
  try {
    // @ts-ignore
    task = axios.get(url)
  } catch (error) {
    console.log(error);    // { "error": 400 }
  }
  // @ts-ignore
  return task.data;
};



export {
  find,
  findOne
}
