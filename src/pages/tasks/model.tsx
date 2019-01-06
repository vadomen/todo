export interface Task {
  _id: string;
  title: string;
  description: string;
  categories: [string];
  remind: Date;
  status: boolean;
}
