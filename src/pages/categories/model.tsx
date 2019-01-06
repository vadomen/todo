import { Task } from '../tasks/model';
export interface Category {
  _id: string;
  name: string;
  description: string;
  tasks: [Task];
}
