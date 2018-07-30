import {Task} from './task';
export class Category {
  _id: string;
  name: string;
  description: string;
  tasks: [Task];
}
