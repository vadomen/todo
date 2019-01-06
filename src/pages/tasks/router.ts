import { TasksList, NewTask, EditTask } from '.';

const TasksRouter = [
  {
    path: '/tasks',
    exact: true,
    component: TasksList
  },
  {
    path: '/tasks/new',
    component: NewTask
  },
  {
    path: '/tasks/:id',
    component: EditTask
  }
];

export default TasksRouter;
