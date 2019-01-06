import { CategoriesList } from '.';

const router = [
  {
    path: '/categories',
    exact: true,
    component: CategoriesList
  },
  {
    path: '/categories/new'
  },
  {
    path: '/categories/:id'
  }
];

export default router;
